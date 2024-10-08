import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
// import { bookings } from "../../data/data-bookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function useCheckIn() {
  const queryClient = useQueryClient();
const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Order #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate('/dashboard');
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
