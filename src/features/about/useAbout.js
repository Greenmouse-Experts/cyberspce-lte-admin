import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAbout,
  updateAbout,
} from "../../services/apis/general-api";
import toast from "react-hot-toast";

export function useGetAbout() {
  const { isLoading, data: about } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  return { isLoading, about };
}

export function useUpdateAbout() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateAboutInfo } = useMutation({
    mutationFn: updateAbout,
    onSuccess: () => {
      toast.success("About updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["about"],
      });
    },
  });

  return { updateAboutInfo, isUpdating };
}
