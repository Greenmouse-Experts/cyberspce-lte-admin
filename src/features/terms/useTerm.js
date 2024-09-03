import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getContact, getTerms, updateContact, updateTerms  } from "../../services/apis/general-api";
import toast from "react-hot-toast";

export function useGetTerms() {
  const { isLoading, data: terms } = useQuery({
    queryKey: ["terms"],
    queryFn: getTerms,
  });

  return { isLoading, terms };
}

export function useUpdateTerms() {
    const queryClient = useQueryClient()
  const { isLoading: isUpdating, mutate: updateTermsInfo } = useMutation({
    mutationFn: updateTerms,
    onSuccess: () => {
      toast.success("Policy updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["terms"],
      });
    },
  });

  return { updateTermsInfo, isUpdating };
}
