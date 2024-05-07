import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCustomersApi } from "../../services/apis/customer-api";

export function useUsers() {
  const {
    isLoading: loading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getCustomersApi,
    retry: false,
  });

  return { loading, users, error };
}
