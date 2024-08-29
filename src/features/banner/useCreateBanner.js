import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBannerApi } from "../../services/apis/banner-api";

export function useCreateBanner() {
  const queryClient = useQueryClient();

  const { mutate: createBanner, isLoading: isCreating } = useMutation({
    mutationFn: (payload) => createBannerApi(payload),
    onSuccess: () => {
      toast.success("New Banner successfully created");
      queryClient.invalidateQueries({ queryKey: ["banner"] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createBanner };
}
