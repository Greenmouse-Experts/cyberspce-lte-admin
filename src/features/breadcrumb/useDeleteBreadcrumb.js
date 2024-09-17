import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBreadCrumbApi } from "../../services/apis/breadcrumb-api";

export function useDeleteBreadcrumb() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBreadcrumb } = useMutation({
    mutationFn: (id) => deleteBreadCrumbApi(id),
    onSuccess: () => {
      toast.success("Breadcrumb successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["breadcrumb"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBreadcrumb };
}
