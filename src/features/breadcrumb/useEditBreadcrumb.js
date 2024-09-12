import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBreadCrumbApi } from "../../services/apis/breadcrumb-api";

export function useEditBreadcrumb() {
  const queryClient = useQueryClient();

  const { mutate: editBanner, isLoading: isEditing } = useMutation({
    mutationFn: ({ payload, id }) => updateBreadCrumbApi(id, payload),
    onSuccess: () => {
      toast.success("Breadcrumb info successfully updated");
      queryClient.invalidateQueries({ queryKey: ["breadcrumb"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editBanner };
}
