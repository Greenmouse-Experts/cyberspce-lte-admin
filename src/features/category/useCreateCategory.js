import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategory } from "../../services/apis/category-api";

export function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate: createCat, isLoading: isCreating } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("New Category successfully created");
      queryClient.invalidateQueries({ queryKey: ["category"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCat };
}
