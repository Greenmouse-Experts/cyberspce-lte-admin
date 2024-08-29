import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { auditOrders, getOrderById } from "../../services/apis/orders-api";
import toast from "react-hot-toast";

export function useOrder() {
  const { orderId } = useParams();

  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
    retry: false,
  });

  return { isLoading, order, error };
}


export function useUpdateOrder() {
  const queryClient = useQueryClient();
  const { orderId } = useParams();

  const { mutate: updateOrderStatus, isLoading: isUpdating } = useMutation({
    mutationFn: (payload) => auditOrders(payload),
    onSuccess: () => {
      toast.success("Order status updated successfully");
      queryClient.invalidateQueries({ queryKey: ["order", orderId] });
  
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateOrderStatus };
}

