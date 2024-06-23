import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckOut();
  return (
    <Button variation="primary" size="small"
    disabled={isCheckingOut} >
      View
    </Button>
  );
}

export default CheckoutButton;
