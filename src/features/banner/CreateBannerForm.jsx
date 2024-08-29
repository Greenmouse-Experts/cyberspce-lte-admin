import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateBanner } from "./useCreateBanner";
import { useEditBanner } from "./useEditBanner";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import { convertToBase64 } from "../../utils/helpers";

function CreateBannerForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState, setValue } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { createBanner, isCreating } = useCreateBanner();
  const { isEditing, editDealer } = useEditBanner();
  const isWorking = isCreating || isEditing;

  const onSubmit = async (data) => {
    try {
      // Convert images to base64
      const imageBase64 = data.image[0]
        ? await convertToBase64(data.image[0])
        : null;
      const backgroundBase64 = data.background[0]
        ? await convertToBase64(data.background[0])
        : null;

      const payload = {
        title: [
          {
            firstTitle: data.firstTitle,
            secondTitle: data.secondTitle,
            thirdTitle: data.thirdTitle,
          },
        ],
        image: imageBase64, // Base64 string
        background: backgroundBase64, // Base64 string
      };
    const title= 
        {
          firstTitle: data.firstTitle,
          secondTitle: data.secondTitle,
          thirdTitle: data.thirdTitle,
        }
      const formData = new FormData();

      // Append text fields
      formData.append("title", title);
      // Append files; ensure only the first file is added
      if (data.image?.[0]) formData.append("image", data.image[0]);
      if (data.background?.[0]) formData.append("background", data.background[0]);

      if (isEditSession) {
        editDealer(
          { payload, id: editId },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
            },
          }
        );
      } else {
        createBanner(formData, {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        });
      }
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
                required: "Image is required",
                
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
                required: "Background is required",
               
              })}
            />
          </FormRow>
        </div>
      </div>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
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

export default CreateBannerForm;
