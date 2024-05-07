import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createDealerApi } from "../../services/apis/dealer-api";

export function useCreateDealer() {
  const queryClient = useQueryClient();

  const { mutate: createDealer, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createDealerApi(payload),
    onSuccess: () => {
      toast.success("New Carbin successfully created");
      queryClient.invalidateQueries({ queryKey: ["dealers"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createDealer };
}
