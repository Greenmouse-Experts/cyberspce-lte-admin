import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getService,
  updateService,
} from "../../services/apis/general-api";
import toast from "react-hot-toast";

export function useGetService() {
  const { isLoading, data: service } = useQuery({
    queryKey: ["service"],
    queryFn: getService,
  });

  return { isLoading, service };
}

export function useUpdateService() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateServiceInfo } = useMutation({
    mutationFn: updateService,
    onSuccess: () => {
      toast.success("Service updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["service"],
      });
    },
  });

  return { updateServiceInfo, isUpdating };
}
