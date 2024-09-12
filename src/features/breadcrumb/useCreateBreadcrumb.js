import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBreadCrumbApi } from "../../services/apis/breadcrumb-api";

export function useCreateBreadcrumb() {
  const queryClient = useQueryClient();

  const { mutate: createBreadcrumb, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createBreadCrumbApi(payload),
    onSuccess: () => {
      toast.success("New Breadcrumb successfully created");
      queryClient.invalidateQueries({ queryKey: ["breadcrumb"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createBreadcrumb };
}
