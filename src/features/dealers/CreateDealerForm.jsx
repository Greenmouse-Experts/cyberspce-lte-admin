import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import {  useCreatePlans } from "./useCreateDealer";
import { useEditPlan } from "./useEditDealer";

function CreateDealerForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { createPlan, isCreating } = useCreatePlans();
  const { isEditing, editPlan} = useEditPlan();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const payload = {
      name: data?.name,
      price: data?.price,
      validity: data?.validity,
      avalibilty_hour: data?.avalibilty_hour,
      avalibilty_day: data?.avalibilty_day,
    }
    if (isEditSession)
      editPlan(
        { payload: payload , id: editId},
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createPlan(
        { ...data},
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
      <FormRow label="Plan name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Plan name is required",
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="price"
          disabled={isWorking}
          {...register("price", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Validity" error={errors?.display?.message}>
          <select
            {...register("validity", {
              required: "This field is required",
            })}
            name="validity"
            className="border border-gray-300 rounded-lg w-[240px] py-3 p-2 "
          >
            <option value="">Select an option</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </FormRow>

      <FormRow label="Avalibilty Hour" error={errors?.regularPrice?.message}>
        <Input
          type="text"
          disabled={isWorking}
          id="avalibilty_hour"
          {...register("avalibilty_hour", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price needs to be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Avalibilty Day" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="avalibilty_day"
          {...register("avalibilty_day", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price needs to be at least 1",
            },
          })}
        />
      </FormRow>

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
          {isEditSession ? "Edit Data Plan" : "Add Data Plan"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateDealerForm;
