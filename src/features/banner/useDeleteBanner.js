import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteDealerApi } from "../../services/apis/dealer-api";

export function useDeleteDealer() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDealer } = useMutation({
    mutationFn: (id) => deleteDealerApi(id),
    onSuccess: () => {
      toast.success("Banner successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["banner"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteDealer };
}
