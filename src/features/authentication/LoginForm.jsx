import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { adminLogin } from "../../services/apis/auth-api";
import toast from "react-hot-toast";
import useAuthStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const saveUser = useAuthStore((state) => state.saveUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };
    await adminLogin(payload)
      .then((data) => {
        toast.success("Login Successful");
        console.log(data.data.name.split(' ')[1]);
        saveUser({
          firstName: data.data.name.split(' ')[0],
          lastName: data.data.name.split(' ')[1],
          email: data.data.email,
          token: data.token,
          phone: data.data.phone_number,
          id: data.data.id,
          image: null,
          role: data.data.user_type,
        });
        localStorage.setItem("cla_token", data.token);
        navigate('/')
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
        if (!!err?.response?.data?.errors.length) {
          Object.entries(err?.response?.data?.errors).forEach(
            ([key, value]) => {
              toast.error(value[0]);
            }
          );
        }
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          defaultValue={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          defaultValue={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={loading} size="large">
          {!loading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
