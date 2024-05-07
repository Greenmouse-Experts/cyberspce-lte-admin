import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCustomerApi } from "../../services/apis/customer-api";

export function useEditUser() {
  const queryClient = useQueryClient();

  const { isLoading: isLoading, mutate: updateUser } = useMutation({
    mutationFn: (payload) => updateCustomerApi(payload),
    onSuccess: () => {
      toast.success("user profile updated");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, updateUser };
}
