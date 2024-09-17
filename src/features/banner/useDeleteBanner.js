import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBannerApi } from "../../services/apis/banner-api";

export function useDeleteBanner() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBanner } = useMutation({
    mutationFn: (id) => {
      console.log(id)
      deleteBannerApi(id)
    },
    onSuccess: () => {
      toast.success("Banner successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["banner"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBanner };
}
