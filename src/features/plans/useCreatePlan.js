import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPlanApi } from "../../services/apis/plans-api";

export function useCreatePlans() {
  const queryClient = useQueryClient();

  const { mutate: createPlan, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createPlanApi(payload),
    onSuccess: () => {
      toast.success("New Carbin successfully created");
      queryClient.invalidateQueries({ queryKey: ["plans"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createPlan };
}
