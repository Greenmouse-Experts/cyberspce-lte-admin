import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormRow from "../../ui/FormRow";
import { useCreateProduct } from "./useCreateCabin";
import { useEditProduct } from "./useEditCabin";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apis/category-api";
import { useState } from "react";
import { convertArrayToBase64 } from "../../utils/helpers";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, specification, ...editValues } = cabinToEdit;
  const [specs, setSpecs] = useState(specification || "");
  const [images, setImages] = useState([]);
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { createProd, isCreating } = useCreateProduct();
  const { isEditing, editProduct } = useEditProduct();

  const isWorking = isCreating || isEditing;
  const handleImages = (item) => {
    convertArrayToBase64(Array.from(item)).then((base64Array) => {
      setImages(base64Array); // Array of Base64 strings
    });
  };
  const onSubmit = (data) => {
    const payload = {
      ...data,
      images: images,
      specification: specs,
      dealer_id: 0,
      description: data?.coverage,
    };
    const editPayload = {
      category_id: data?.category_id,
      count_in_stock: data?.count_in_stock,
      coverage: data?.coverage,
      dealer_id: 0,
      description: data?.coverage,
      display: data?.display,
      price: data?.price,
      product_name: data?.product_name,
      specification: specs,
    }
    if (isEditSession){
      editProduct(
        { payload: editPayload , id: editId},
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
    else
      createProd(payload, {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      });
  };
  const onError = (error) => {
    console.log(error);
  };
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <div className="grid lg:grid-cols-2">
        <FormRow label="Product name" error={errors?.product_name?.message}>
          <Input
            type="text"
            id="product_name"
            disabled={isWorking}
            {...register("product_name", {
              required: "Cabin name is required",
            })}
          />
        </FormRow>

        <FormRow label="Price" error={errors?.price?.message}>
          <Input
            type="number"
            id="price"
            disabled={isWorking}
            {...register("price", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Maximum capacity needs to be at least 1",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Count in stock "
          error={errors?.count_in_stock?.message}
        >
          <Input
            type="number"
            disabled={isWorking}
            id="count_in_stock"
            {...register("count_in_stock", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Price needs to be at least 1",
              },
            })}
          />
        </FormRow>

        <FormRow label="Category" error={errors?.discount?.message}>
          <select
            {...register("category_id", {
              required: "This field is required",
            })}
            name="category_id"
            className="border border-gray-300 rounded-lg w-[240px] py-3 p-2 "
          >
            <option value="">Select an option</option>
            {categories?.data?.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </FormRow>

        <div className="lg:col-span-2 pb-[65px] border-b">
          <p className="mb-3 mt-4">Specifications</p>
          <ReactQuill
            theme="snow"
            value={specs}
            onChange={setSpecs}
            className={"h-36"}
          />
        </div>

        <FormRow label="Publish" error={errors?.display?.message}>
          <select
            {...register("display", {
              required: "This field is required",
            })}
            name="display"
            className="border border-gray-300 rounded-lg w-[240px] py-3 p-2 "
          >
            <option value="">Select an option</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </FormRow>

        <FormRow label="Coverage" error={errors?.description?.message}>
          <Textarea
            type="text"
            id="coverage"
            disabled={isWorking}
            defaultValue=""
            {...register("coverage", {
              required: "This field is required",
            })}
          />
        </FormRow>

       {!isEditSession && <div className="lg:col-span-2 mt-4">
          <FormRow label="Product images">
            <FileInput
              id="image"
              accept="image/*"
              disabled={isWorking}
              multiple
              onChange={(e) => handleImages(e.target.files)}
              // {...register("image", {
              //   required: isEditSession ? false : "This field is required",
              // })}
            />
          </FormRow>
        </div>}
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
          {isEditSession ? "Edit Product" : "Add Product"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
