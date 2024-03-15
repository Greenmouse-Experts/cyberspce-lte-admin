import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function UpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updateCurrentUser({ password, fullName, avatar }),
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateUser };
}
