import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateTestimonyApi } from "../../services/apis/testimony-api";

export function useEditTestimony() {
  const queryClient = useQueryClient();

  const { mutate: editTestimony, isLoading: isEditing } = useMutation({
    mutationFn: ({ payload, id }) => updateTestimonyApi(id, payload),
    onSuccess: () => {
      toast.success("Testimony info successfully updated");
      queryClient.invalidateQueries({ queryKey: ["testimony"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editTestimony };
}
