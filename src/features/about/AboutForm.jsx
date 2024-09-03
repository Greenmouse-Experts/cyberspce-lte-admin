import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useUpdateAbout } from "./useAbout";

function AboutForm({ initialData, onSubmit }) {
  const [previewImages, setPreviewImages] = useState(
    initialData?.content?.map((item) => item.image) || []
  );

  const { control, handleSubmit, formState, reset, register, watch } = useForm({
    defaultValues: {
      content: initialData?.content || [{ image: "", description: "" }],
      mission: initialData?.mission || "",
      vision: initialData?.vision || "",
    },
  });

  const { updateAboutInfo, isUpdating } = useUpdateAbout();
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "content",
  });

  const watchedContent = watch("content");

  useEffect(() => {
    const newPreviewImages = [...previewImages];
    watchedContent.forEach((contentItem, index) => {
      if (contentItem.image && typeof contentItem.image === "object") {
        const file = contentItem.image[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviewImages[index] = reader.result;
          setPreviewImages(newPreviewImages);
        };
        reader.readAsDataURL(file);
      } else {
        newPreviewImages[index] = contentItem.image;
        setPreviewImages(newPreviewImages);
      }
    });
  }, [watchedContent]);

  // Convert image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = async (data) => {
    // Convert images to base64
    const contentWithBase64 = await Promise.all(
      data.content.map(async (item) => {
        if (typeof item.image === "object") {
          const base64Image = await convertToBase64(item.image[0]);
          return { ...item, image: base64Image };
        }
        return item;
      })
    );

    const content = {
      content: contentWithBase64,
      mission: data.mission,
      vision: data.vision,
    };

    updateAboutInfo(content);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="mb-4 text-lg font-bold">Edit Terms</h2>

      {/* Mission Field */}
      <FormRow label="Mission" error={errors?.mission?.message}>
        <Controller
          control={control}
          name="mission"
          render={({ field }) => (
            <Textarea
              placeholder="Mission"
              {...field}
              error={errors?.mission?.message}
            />
          )}
          rules={{ required: "Mission is required" }}
        />
      </FormRow>

      {/* Vision Field */}
      <FormRow label="Vision" error={errors?.vision?.message}>
        <Controller
          control={control}
          name="vision"
          render={({ field }) => (
            <Textarea
              placeholder="Vision"
              {...field}
              error={errors?.vision?.message}
            />
          )}
          rules={{ required: "Vision is required" }}
        />
      </FormRow>

      {fields.map((item, index) => (
        <div key={item.id} className="mb-6">
          {/* Existing Image */}
          <div className="mb-2">
            <span className="block font-medium mb-1">Existing Image:</span>
            {previewImages[index] && (
              <img
                src={previewImages[index]}
                alt={`Existing Image ${index + 1}`}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            )}
          </div>

          {/* Image Upload Field */}
          <FormRow
            label={`Image ${index + 1}`}
            error={errors?.content?.[index]?.image?.message}
          >
            <input
              id={`image-${index}`}
              accept="image/*"
              type="file"
              disabled={isUpdating}
              {...register(`content.${index}.image`)}
            />
          </FormRow>

          {/* Description */}
          <FormRow
            label={`Description ${index + 1}`}
            error={errors?.content?.[index]?.description?.message}
          >
            <Controller
              control={control}
              name={`content.${index}.description`}
              render={({ field }) => (
                <Textarea
                  placeholder={`Description ${index + 1}`}
                  {...field}
                  error={errors?.content?.[index]?.description?.message}
                />
              )}
              rules={{ required: "Description is required" }}
            />
          </FormRow>

          {/* Remove Term Button */}
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

      {/* Add Term Button */}
      <Button
        type="button"
        onClick={() => append({ image: "", description: "" })}
      >
        Add
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

export default AboutForm;
