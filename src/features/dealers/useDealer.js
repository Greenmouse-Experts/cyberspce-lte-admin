import { useQuery } from "@tanstack/react-query";
import { getPlansApi } from "../../services/apis/plans-api";

export function usePlans(){
    const {
        isLoading,
        data: plans,
        error,
      } = useQuery({
        queryKey: ["plans"],
        queryFn: getPlansApi,
      });

      return {isLoading, plans, error}
      
}