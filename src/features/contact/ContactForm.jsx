import { useForm, useFieldArray, Controller } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useUpdateContact } from "./useContact";

function ContactForm({ initialData }) {
  const { control, handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      addresses: initialData?.addresses || [""],
      phones: initialData?.phones || [""],
      emails: initialData?.emails || [""],
    },
  });

  const {
    fields: addressFields,
    append: appendAddress,
    remove: removeAddress,
  } = useFieldArray({
    control,
    name: "addresses",
  });

  const {
    fields: phoneFields,
    append: appendPhone,
    remove: removePhone,
  } = useFieldArray({
    control,
    name: "phones",
  });

  const {
    fields: emailFields,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({
    control,
    name: "emails",
  });

  const { updateContactInfo, isUpdating } = useUpdateContact();

  const { errors } = formState;

  const onSubmit = (data) => {
    updateContactInfo(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-4 text-lg font-bold">Edit Contact Information</h2>

      {/* Addresses */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Addresses</h3>
        {addressFields.map((item, index) => (
          <FormRow key={item.id} error={errors?.addresses?.[index]?.message}>
            <Controller
              control={control}
              name={`addresses.${index}`}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder={`Address ${index + 1}`}
                  {...field}
                  error={errors?.addresses?.[index]?.message}
                  disabled={isUpdating}
                />
              )}
            />
            <Button
              type="button"
              variation="danger"
              onClick={() => removeAddress(index)}
              disabled={addressFields.length === 1}
            >
              Remove
            </Button>
          </FormRow>
        ))}
        <Button type="button" onClick={() => appendAddress("")}>
          Add Address
        </Button>
      </div>

      {/* Phones */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Phones</h3>
        {phoneFields.map((item, index) => (
          <FormRow key={item.id} error={errors?.phones?.[index]?.message}>
            <Controller
              control={control}
              name={`phones.${index}`}
              render={({ field }) => (
                <Input
                  type="tel"
                  placeholder={`Phone ${index + 1}`}
                  {...field}
                  error={errors?.phones?.[index]?.message}
                  disabled={isUpdating}
                />
              )}
            />
            <Button
              type="button"
              variation="danger"
              onClick={() => removePhone(index)}
              disabled={phoneFields.length === 1 || isUpdating}
            >
              Remove
            </Button>
          </FormRow>
        ))}
        <Button type="button" onClick={() => appendPhone("")}>
          Add Phone
        </Button>
      </div>

      {/* Emails */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Emails</h3>
        {emailFields.map((item, index) => (
          <FormRow key={item.id} error={errors?.emails?.[index]?.message}>
            <Controller
              control={control}
              name={`emails.${index}`}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder={`Email ${index + 1}`}
                  {...field}
                  error={errors?.emails?.[index]?.message}
                  disabled={isUpdating}
                />
              )}
            />
            <Button
              type="button"
              variation="danger"
              onClick={() => removeEmail(index)}
              disabled={emailFields.length === 1 || isUpdating}
            >
              Remove
            </Button>
          </FormRow>
        ))}
        <Button type="button" onClick={() => appendEmail("")}>
          Add Email
        </Button>
      </div>

      <FormRow>
        <Button disabled={isUpdating} type="submit">
          Save Changes
        </Button>
        <Button
          type="reset"
          variation="secondary"
          onClick={() => reset(initialData)}
          disabled={isUpdating}
        >
          Reset
        </Button>
      </FormRow>
    </Form>
  );
}

export default ContactForm;
