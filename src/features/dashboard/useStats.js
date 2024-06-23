import { useQuery } from "@tanstack/react-query";
import { getStatsApi } from "../../services/apis/dashboard-api";

export function useStats() {
  const {
    isLoading: isGettingStats,
    data: stats,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatsApi,
  });

  return { isGettingStats, stats, error };
}
