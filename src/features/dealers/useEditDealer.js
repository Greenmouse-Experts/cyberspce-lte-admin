import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePlanApi } from "../../services/apis/plans-api";

export function useEditPlan() {
  const queryClient = useQueryClient();

  const { mutate: editPlan, isLoading: isEditing } = useMutation({
    mutationFn: ({ payload, id }) => updatePlanApi(id, payload),
    onSuccess: () => {
      toast.success("New Plan successfully updated");
      queryClient.invalidateQueries({ queryKey: ["plans"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editPlan };
}
