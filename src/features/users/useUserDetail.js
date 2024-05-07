import { useQuery } from "@tanstack/react-query";
import { getSingleCustomer } from "../../services/apis/customer-api";

export function useUserDetails(id) {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: () => getSingleCustomer(id),
    retry: false,
  });

  return { isLoading, user, error };
}