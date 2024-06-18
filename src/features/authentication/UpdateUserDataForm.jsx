import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "../../services/apis/auth-api";
import toast from "react-hot-toast";
import FileInput from "../../ui/FileInput";

function UpdateUserDataForm() {
  const {user, saveUser} = useAuth()
  const [isUpdating, setIsUpdating] = useState(false)

  const [fullName, setFullName] = useState(`${user.firstName} ${user.lastName}`);
  const [avatar, setAvatar] = useState(null);

  const handeleUpdateProfile = async (e) => {
    e.preventDefault()
    setIsUpdating(true)
    const payload = {
      name: fullName
    }
    updateProfile(payload)
    .then((res) => {
        toast.success(res.message)
        setIsUpdating(false)
        saveUser({
          ...user,
          firstName: fullName.split(' ')[0],
          lastName: fullName.split(' ')[1]
        })
    })
    .catch(() => {
      setIsUpdating(false)
    })
  }

  function handleCancel(e) {
    // setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handeleUpdateProfile}>
      <FormRow label="Email address">
        <Input value={user.email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          onClick={handleCancel}
          disabled={isUpdating}
          type="reset"
          variation="secondary"
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>{isUpdating? "Updating..." : 'Update account'}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
