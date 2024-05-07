import { useQuery } from "@tanstack/react-query";
import { getDealersApi } from "../../services/apis/dealer-api";

export function useDealer(){
    const {
        isLoading,
        data:dealers,
        error,
      } = useQuery({
        queryKey: ["dealers"],
        queryFn: getDealersApi,
      });

      return {isLoading, dealers, error}
      
}