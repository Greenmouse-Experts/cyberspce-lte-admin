import { useMutation } from "@tanstack/react-query";
import { signup as SignUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: () => {
      toast.success("Account successfully created! Please verify your account ");
    },
  });

  return{signup, isLoading}
}
