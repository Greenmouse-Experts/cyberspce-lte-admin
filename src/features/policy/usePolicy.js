import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPolicy, updatePolicy,  } from "../../services/apis/general-api";
import toast from "react-hot-toast";

export function useGetPolicy() {
  const { isLoading, data: policy } = useQuery({
    queryKey: ["policy"],
    queryFn: getPolicy,
  });

  return { isLoading, policy };
}

export function useUpdatePolicy() {
    const queryClient = useQueryClient()
  const { isLoading: isUpdating, mutate: updatePolicyInfo } = useMutation({
    mutationFn: updatePolicy,
    onSuccess: () => {
      toast.success("Policy updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["policy"],
      });
    },
  });

  return { updatePolicyInfo, isUpdating };
}
