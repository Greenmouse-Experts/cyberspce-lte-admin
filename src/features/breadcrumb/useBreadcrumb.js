import { useQuery } from "@tanstack/react-query";
import { getBreadCrumbApi } from "../../services/apis/breadcrumb-api";

export function useBreadCrumb(){
    const {
        isLoading,
        data:breadcrumb,
        error,
      } = useQuery({
        queryKey: ["breadcrumb"],
        queryFn: getBreadCrumbApi,
      });

      return {isLoading, breadcrumb, error}
      
}