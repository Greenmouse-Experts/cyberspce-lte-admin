import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletePlanApi } from "../../services/apis/plans-api";

export function useDeletePlan() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletePlan } = useMutation({
    mutationFn: (id) => deletePlanApi(id),
    onSuccess: () => {
      toast.success("Plan successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePlan };
}
