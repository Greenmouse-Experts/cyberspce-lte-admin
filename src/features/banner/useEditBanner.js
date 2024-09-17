import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBannerApi } from "../../services/apis/banner-api";

export function useEditBanner() {
  const queryClient = useQueryClient();

  const { mutate: editBanner, isLoading: isEditing } = useMutation({
    mutationFn: (payload) => updateBannerApi(payload),
    onSuccess: () => {
      toast.success("Banner info successfully updated");
      queryClient.invalidateQueries({ queryKey: ["banner"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isEditing, editBanner };
}
