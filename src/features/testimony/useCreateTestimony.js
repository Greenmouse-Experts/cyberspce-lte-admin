import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createTestimonyApi } from "../../services/apis/testimony-api";

export function useCreateTestimony() {
  const queryClient = useQueryClient();

  const { mutate: createTestimony, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createTestimonyApi(payload),
    onSuccess: () => {
      toast.success("Testimony successfully created");
      queryClient.invalidateQueries({ queryKey: ["testimony"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createTestimony };
}
