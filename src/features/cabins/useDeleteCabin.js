import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { deleteProduct } from "../../services/apis/product-api";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProd } = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Product successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProd };
}
