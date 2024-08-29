import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getContact, updateContact  } from "../../services/apis/general-api";
import toast from "react-hot-toast";

export function useGetContact() {
  const { isLoading, data: contact } = useQuery({
    queryKey: ["contact"],
    queryFn: getContact,
  });

  return { isLoading, contact };
}

export function useUpdateContact() {
    const queryClient = useQueryClient()
  const { isLoading: isUpdating, mutate: updateContactInfo } = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      toast.success("Contact updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["contact"],
      });
    },
  });

  return { updateContactInfo, isUpdating };
}
