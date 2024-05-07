import { useQuery } from "@tanstack/react-query";
import { getTestimonysApi } from "../../services/apis/testimony-api";

export function useTestimony(){
    const {
        isLoading,
        data:testimony,
        error,
      } = useQuery({
        queryKey: ["testimony"],
        queryFn: getTestimonysApi,
      });

      return {isLoading, testimony, error}
      
}