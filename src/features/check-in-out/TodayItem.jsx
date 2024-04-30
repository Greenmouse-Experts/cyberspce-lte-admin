import styled from "styled-components";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { formatCurrency } from "../../utils/helpers";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 1fr 7rem 9rem;
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

function TodayItem({ activity }) {
  const { id, status, guests } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Delivered</Tag>}
      {status === "checked-in" && <Tag type="blue">Ongoing</Tag>}
      {/* <Flag src={guests.countryFlag} alt={`flag of ${guests.country}`} /> */}
      <Guest>{guests.fullName}</Guest>
      <div>{formatCurrency(35)}</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
