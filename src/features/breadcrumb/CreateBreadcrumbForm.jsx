import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useEffect } from "react";
import { useCreateBreadcrumb } from "./useCreateBreadcrumb";
import { useEditBreadcrumb } from "./useEditBreadcrumb";
import FileInput from "../../ui/FileInput";

function CreateBreadcrumbForm({ bannerToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = bannerToEdit;
  const isEditSession = Boolean(editId);

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
      setValue("title", bannerToEdit.title || '');
      setValue("subtitle", bannerToEdit.subtitle || '');
      setValue("link", bannerToEdit.link || '');
      setValue("image", bannerToEdit.image || '');
    }
  }, [editValues, isEditSession, setValue, bannerToEdit]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);
      formData.append("link", data.link);
      if (data.image?.[0]) formData.append("image", data.image[0]);
      if(isEditSession){
        formData.append("breadcrumb_id", editId )
      }

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
        <FormRow label="Title" error={errors?.title?.message}>
          <Input
            type="text"
            id="title"
            disabled={isWorking}
            {...register("title", { required: "Title is required" })}
          />
        </FormRow>
        <FormRow label="Subtitle" error={errors?.subtitle?.message}>
          <Input
            type="text"
            id="subtitle"
            disabled={isWorking}
            {...register("subtitle")}
          />
        </FormRow>
        <FormRow label="Link" error={errors?.link?.message}>
          <Input
            type="text"
            id="link"
            disabled={isWorking}
            {...register("link", { required: "Link is required" })}
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
          {isEditSession ? "Edit BreadCrumb" : "Add BreadCrumb"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBreadcrumbForm;
