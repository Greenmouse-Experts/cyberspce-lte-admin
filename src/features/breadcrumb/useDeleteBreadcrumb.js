import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteDealerApi } from "../../services/apis/dealer-api";

export function useDeleteBreadcrumb() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDealer } = useMutation({
    mutationFn: (id) => deleteDealerApi(id),
    onSuccess: () => {
      toast.success("Breadcrumb successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["breadcrumb"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteDealer };
}
