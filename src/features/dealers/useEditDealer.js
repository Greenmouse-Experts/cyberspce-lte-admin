import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateDealerApi } from "../../services/apis/dealer-api";

export function useEditDealer() {
  const queryClient = useQueryClient();

  const { mutate: editDealer, isLoading: isEditing } = useMutation({
    mutationFn: ({ payload, id }) => updateDealerApi(id, payload),
    onSuccess: () => {
      toast.success("Dealer info successfully updated");
      queryClient.invalidateQueries({ queryKey: ["dealers"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editDealer };
}
