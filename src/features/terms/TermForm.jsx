import { useForm, useFieldArray, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; // import styles
import { useUpdateTerms } from "./useTerm";

function TermForm({ initialData, onSubmit }) {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      content: initialData?.content ? JSON.parse(initialData?.content) : [{ title: "", description: "" }],
    },
  });

  const { updateTermsInfo, isUpdating } = useUpdateTerms();

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "content",
  });

  const handleFormSubmit = (data) => {
    console.log(JSON.stringify(data));

    const content = { content: JSON.stringify(data.content) };
    updateTermsInfo(content);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="mb-4 text-lg font-bold">Edit Terms</h2>

      {fields.map((item, index) => (
        <div key={item.id} className="mb-6">
          {/* Title */}
          <FormRow
            label={`Title ${index + 1}`}
            error={errors?.content?.[index]?.title?.message}
          >
            <Controller
              control={control}
              name={`content.${index}.title`}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder={`Title ${index + 1}`}
                  {...field}
                  error={errors?.content?.[index]?.title?.message}
                />
              )}
              rules={{ required: "Title is required" }}
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
                <ReactQuill
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  placeholder={`Description ${index + 1}`}
                  modules={{ toolbar: true }} 
                  
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
            Remove Term
          </Button>
        </div>
      ))}

      {/* Add Term Button */}
      <Button
        type="button"
        onClick={() => append({ title: "", description: "" })}
      >
        Add Term
      </Button>

      {/* Form Action Buttons */}
      <FormRow>
        <Button type="submit" disabled={isUpdating}>Save Changes</Button>
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

export default TermForm;
