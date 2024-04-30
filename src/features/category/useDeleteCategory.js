import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCategory } from "../../services/apis/category-api";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCat } = useMutation({
    mutationFn: (id) => deleteCategory(id),
    onSuccess: () => {
      toast.success("Caregory successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCat };
}
