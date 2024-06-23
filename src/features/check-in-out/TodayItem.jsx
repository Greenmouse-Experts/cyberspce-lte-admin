import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { formatCurrency } from "../../utils/helpers";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ order }) {
  const { status, items, user, id} = order;
  const totalAmount = items.reduce((sum, item) => {
    return sum + parseFloat(item.amount);
  }, 0);
  // console.log(order)
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Delivered</Tag>}
      {status === "Confirmed" && <Tag type="blue">Ongoing</Tag>}
     
      <Guest>{user.name}</Guest>
      <div>{formatCurrency(totalAmount)}</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/orders/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "Confirmed" && <CheckoutButton 
      orderId={id}
       />}
    </StyledTodayItem>
  );
}

export default TodayItem;
