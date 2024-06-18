import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import { useCreateDealer } from "./useCreateDealer";
import { useEditDealer } from "./useEditDealer";

function CreateDealerForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

 

  const { createDealer, isCreating } = useCreateDealer();
  const { isEditing, editDealer } = useEditDealer();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const payload = {
      name: data?.name,
      address: data?.address,
      region: data?.region,
      country: "Nigeria",
    };
    if (isEditSession)
      editDealer(
        { payload: payload, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createDealer(
        { ...data, country: "Nigeria" },
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
      <div className="grid items-center lg:grid-cols-2">
        <FormRow label="Dealer Name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", {
              required: "delaer name is required",
            })}
          />
        </FormRow>
        <FormRow label="Region" error={errors?.maxCapacity?.message}>
          <Input
            type="text"
            id="region"
            disabled={isWorking}
            {...register("region")}
          />
        </FormRow>
        <div className="lg:col-span-2 mt-3">
          <FormRow label="Address" error={errors?.maxCapacity?.message}>
            <textarea
              className="border p-2 outline-none h-24 w-7/12 border-gray-300 rounded"
              id="address"
              disabled={isWorking}
              {...register("address", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </div>
        <FormRow label="Phone 1" error={errors?.maxCapacity?.message}>
          <Input
            type="text"
            id="phone1"
            disabled={isWorking}
            {...register("phone1", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Phone 2" error={errors?.maxCapacity?.message}>
          <Input
            type="text"
            id="phone2"
            disabled={isWorking}
            {...register("phone2")}
          />
        </FormRow>
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
          {isEditSession ? "Edit Dealer Info" : "Add Dealer Info"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateDealerForm;
