import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import { useCreateTestimony } from "./useCreateTestimony";
import { useEditTestimony } from "./useEditTestimony";

function CreateTestimonyForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { createTestimony, isCreating } = useCreateTestimony();
  const { isEditing, editTestimony } = useEditTestimony();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const payload = {
      user_name: data?.user_name,
      user_field: data?.user_field,
      text: data?.text,
    };
    if (isEditSession)
      editTestimony(
        { payload: payload, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createTestimony(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <div className="grid">
        <FormRow label="User Name" error={errors?.user_name?.message}>
          <Input
            type="text"
            id="user_name"
            disabled={isWorking}
            {...register("user_name", {
              required: "user name is required",
            })}
          />
        </FormRow>
        <FormRow label="User Profession" error={errors?.user_field?.message}>
          <Input
            type="text"
            id="user_field"
            disabled={isWorking}
            {...register("user_field", {
              required: "user profession is required",
            })}
          />
        </FormRow>
        <div className="mt-3">
          <FormRow label="Review" error={errors?.text?.message}>
            <textarea
              className="border p-2 outline-none h-24 w-7/12 border-gray-300 rounded"
              id="text"
              disabled={isWorking}
              {...register("text", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </div>
      </div>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Testimony Info" : "Add Testimony Info"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateTestimonyForm;
