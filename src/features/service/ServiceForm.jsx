import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { useUpdateService } from "./useService";

function ServiceForm({ initialData, onSubmit }) {
  const [previewImage, setPreviewImage] = useState(initialData?.image || "");

  const { control, handleSubmit, formState, reset, register, watch, setValue } = useForm({
    defaultValues: {
      content: initialData?.content || [{ description: "" }],
      image: initialData?.image || "",
    },
  });

  const { updateServiceInfo, isUpdating } = useUpdateService();
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "content",
  });

  const watchedImage = watch("image");

  useEffect(() => {
    if (watchedImage && typeof watchedImage === "object" && watchedImage.length > 0) {
      const file = watchedImage[0];
      if (file instanceof Blob) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [watchedImage]);

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
  
    if (data.image && data.image.length > 0) {
      formData.append('image', data.image[0]);
    }
  
    const formattedContent = data.content.map(item => ({ description: item.description }));

    // Append the formatted content as a JSON string
    formData.append('content', JSON.stringify(formattedContent));

    updateServiceInfo(formData);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="mb-4 text-lg font-bold">Edit Service</h2>

      {/* Image Upload Field */}
      <FormRow label="Service Image" error={errors?.image?.message}>
        <input
          accept="image/*"
          type="file"
          disabled={isUpdating}
          {...register("image")}
        />
      </FormRow>

      {/* Preview for Service Image */}
      {previewImage && (
        <div className="mb-4">
          <span className="block font-medium mb-1">Image Preview:</span>
          <img
            src={previewImage}
            alt="Service Image Preview"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
      )}

      {/* Content Fields */}
      {fields.map((item, index) => (
        <div key={item.id} className="mb-6">
          <div className="mb-20">
            <FormRow error={errors?.content?.[index]?.description?.message}>
              <Controller
                control={control}
                name={`content.${index}.description`}
                render={({ field }) => (
                  <ReactQuill
                    theme="snow"
                    value={field.value || ""}
                    onChange={field.onChange}
                    className="h-36"
                  />
                )}
              />
            </FormRow>
          </div>

          {/* Remove Description Button */}
          <Button
            type="button"
            variation="danger"
            onClick={() => remove(index)}
            disabled={fields.length === 1}
          >
            Remove
          </Button>
        </div>
      ))}

      {/* Add Description Button */}
      <Button
        type="button"
        onClick={() => append({ description: "" })}
      >
        Add Description
      </Button>

      {/* Form Action Buttons */}
      <FormRow>
        <Button type="submit">Save Changes</Button>
        <Button
          type="reset"
          variation="secondary"
          onClick={() => reset(initialData)}
        >
          Reset
        </Button>
      </FormRow>
    </Form>
  );
}

export default ServiceForm;
