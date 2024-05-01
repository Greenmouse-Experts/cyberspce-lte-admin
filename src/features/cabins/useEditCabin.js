import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProduct } from "../../services/apis/product-api";

export function useEditProduct() {
  const queryClient = useQueryClient();

  const { mutate: editProduct, isLoading: isEditing } = useMutation({
  mutationFn: ({payload, id}) => updateProduct(id, payload),
    onSuccess: () => {
      toast.success("Product successfully updated");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editProduct };
}
