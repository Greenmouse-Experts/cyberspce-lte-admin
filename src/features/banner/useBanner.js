import { useQuery } from "@tanstack/react-query";
import { getBannerApi } from "../../services/apis/banner-api";

export function useBanner(){
    const {
        isLoading,
        data:banner,
        error,
      } = useQuery({
        queryKey: ["banner"],
        queryFn: getBannerApi,
      });

      return {isLoading, banner, error}
      
}