import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import {useEditBreadcrumb} from "./useEditBreadcrumb"
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import { useEffect } from "react";
import { useCreateBreadcrumb } from "./useCreateBreadcrumb";

function CreateBreadcrumbForm({ bannerToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = bannerToEdit;
  const isEditSession = Boolean(editId);

  console.log(bannerToEdit)
  const { register, handleSubmit, reset, formState, setValue } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { createBreadcrumb, isCreating } = useCreateBreadcrumb();
  const { isEditing, editBanner } = useEditBreadcrumb();
  const isWorking = isCreating || isEditing;

  // Set existing data on edit
  useEffect(() => {
    if (isEditSession) {
      // Parse the title if it's a JSON string
      const parsedTitle = bannerToEdit.title ? JSON.parse(bannerToEdit.title) : [];
      const { firstTitle = '', secondTitle = '', thirdTitle = '' } = parsedTitle[0] || {};

      // Set form values
      setValue("firstTitle", firstTitle);
      setValue("secondTitle", secondTitle);
      setValue("thirdTitle", thirdTitle);
      setValue("background", bannerToEdit.background);
      setValue("image", bannerToEdit.image);
    }
  }, [editValues, isEditSession, setValue, bannerToEdit]);

  const onSubmit = async (data) => {
    try {
      const title = [
        {
          firstTitle: data.firstTitle,
          secondTitle: data.secondTitle,
          thirdTitle: data.thirdTitle,
        }
      ];

      const formData = new FormData();
      formData.append("title", JSON.stringify(title));
      if (data.image?.[0]) formData.append("image", data.image[0]);
      if (data.background?.[0]) formData.append("background", data.background[0]);

      const action = isEditSession ? editBanner : createBreadcrumb;
      action(formData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    } catch (error) {
      console.error("Error converting files to base64:", error);
    }
  };

  const onError = (error) => {
    console.error(error);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <div className="grid items-center lg:grid-cols-2">
        <FormRow label="First text" error={errors?.firstTitle?.message}>
          <Textarea
            type="text"
            id="firstTitle"
            disabled={isWorking}
            {...register("firstTitle", { required: "First title is required" })}
          />
        </FormRow>
        <FormRow label="Second Text" error={errors?.secondTitle?.message}>
          <Textarea
            type="text"
            id="secondTitle"
            disabled={isWorking}
            {...register("secondTitle", {
              required: "Second title is required",
            })}
          />
        </FormRow>
        <FormRow label="Third Text" error={errors?.thirdTitle?.message}>
          <Textarea
            type="text"
            id="thirdTitle"
            disabled={isWorking}
            {...register("thirdTitle", { required: "Third title is required" })}
          />
        </FormRow>
        <div className="lg:col-span-2 mt-3">
          <FormRow label="Image" error={errors?.image?.message}>
            <FileInput
              id="image"
              accept="image/*"
              type="file"
              disabled={isWorking}
              {...register("image", {
                required: !isEditSession ? "Image is required" : false,
              })}
            />
          </FormRow>
        </div>
        <div className="lg:col-span-2 mt-3">
          <FormRow label="Background Image" error={errors?.background?.message}>
            <FileInput
              id="background"
              accept="image/*"
              type="file"
              disabled={isWorking}
              {...register("background", {
                required: !isEditSession ? "Background is required" : false,
              })}
            />
          </FormRow>
        </div>
      </div>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            reset();
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Banner" : "Add Banner"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBreadcrumbForm;
