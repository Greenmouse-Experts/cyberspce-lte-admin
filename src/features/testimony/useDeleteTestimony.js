import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTestimonyApi } from "../../services/apis/testimony-api";

export function useDeleteTestimony() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTestimony } = useMutation({
    mutationFn: (id) => deleteTestimonyApi(id),
    onSuccess: () => {
      toast.success("Plan successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["testimony"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTestimony };
}
