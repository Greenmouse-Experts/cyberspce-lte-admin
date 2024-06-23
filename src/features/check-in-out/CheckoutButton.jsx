import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckout";

function CheckoutButton({ orderId }) {
  const { checkOut, isCheckingOut } = useCheckOut();
  const navigate = useNavigate()
  return (
    <Button variation="primary" size="small"
    disabled={isCheckingOut} onClick={() => navigate(`/orders/${orderId}`)}>
      View
    </Button>
  );
}

export default CheckoutButton;
