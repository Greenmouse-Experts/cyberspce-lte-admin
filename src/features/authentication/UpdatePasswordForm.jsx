import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import toast from "react-hot-toast";
import { changePassword } from "../../services/apis/auth-api";
import { useState } from "react";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const [isUpdating, setIsUpdating] = useState(false)
  // const { updateUser, isUpdating } = UpdateUser();

  // function onSubmit({ password }) {
  //   console.log("called")
  //   updateUser({ password }, { onSuccess: reset() });
  // }
  const handeleUpdatePassword = async (data) => {
    setIsUpdating(true)
    const payload = {
      password: data.password,
      password_confirmation: data.passwordConfirm
    }
    await changePassword(payload)
    .then((res) => {
        toast.success(res.message)
        setIsUpdating(false)
    })
    .catch(() => {
      setIsUpdating(false)
    })
  }

  return (
    <Form onSubmit={handleSubmit(handeleUpdatePassword)}>
      <FormRow
        label="Old Password"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("old_password", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="New Password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
