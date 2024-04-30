import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCategory } from "../../services/apis/category-api";

export function useEditCategory() {
  const queryClient = useQueryClient();

  const { mutate: editCat, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => updateCategory(id, newCabinData),
    onSuccess: () => {
      toast.success("Category successfully updated");
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editCat };
}
