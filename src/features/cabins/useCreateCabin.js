import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProduct } from "../../services/apis/product-api";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProd, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createProduct(payload),
    onSuccess: () => {
      toast.success("New product successfully created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createProd };
}
