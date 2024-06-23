import styled from "styled-components";
import { format } from "date-fns";
import Select from "../../ui/Select";

import { formatCurrency } from "../../utils/helpers";
import { FaMapMarkerAlt, FaTruck, FaUserCircle } from "react-icons/fa";
import Table from "../../ui/Table";
import { useState } from "react";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-700);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const CustomerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Customer = styled.div`
  display: flex;
  align-items: start;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 2rem;
  color: var(--color-black);
  text-align: right;

  span {
    margin-left: 1rem;
    font-weight: 500;
  }
`;

// A purely presentational component
function BookingDataBox({ order }) {
  const {
    created_at,
    startDate,
    paid_at,
    guests: { fullName: guestName, email } = {},
  } = order.data;

  console.log(order)

  const [selectedValue, setSelectedValue] = useState("");

  // Function to handle change in the Select component
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    // You can perform any other actions here based on the selected value
  };

  return (
    <StyledBookingDataBox>
      <Header>
        {/* <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div> */}

        <p>{format(new Date(paid_at), "EEE, MMM dd yyyy")}</p>

        <Select
          style={{ color: "black", width: "30rem", height: "5rem" }}
          value={selectedValue}
          onChange={handleSelectChange}
          options={[
            {
              value: "Change status",
              label: "Change status",
            },
            { value: "Awaiting payment", label: "Awaiting payment" },
            { value: "confirmed", label: "confirmed" },
            { value: "Shipped", label: "Shipped" },
            { value: "Delivered", label: "Delivered" },
          ]}
        />
      </Header>

      <Section>
        <CustomerDetails>
          <Customer>
            <FaUserCircle size={40} />
            <div>
              <p>{guestName}</p>
              <p>{email}</p>
            </div>
          </Customer>
          <Customer>
            <FaTruck size={40} />
            <div>
              <p>Order Info</p>
              <p>Shipping: Nigeria</p>
              <p>Payment method: Flutterwave</p>
            </div>
          </Customer>
          <Customer>
            <FaMapMarkerAlt size={40} />
            <div>
              <p>Delivered To</p>
              <p>123 road ogba, ikeja </p>
            </div>
          </Customer>
        </CustomerDetails>
        <Table columns="2fr 1.4fr 1fr 1.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Product</div>
            <div>Unit</div>
            <div>Quantity</div>
            <div>Total</div>
          </Table.Header>

          <Table.Body
            data={["jsj"]}
            render={(booking) => (
              <Table.Row>
                <p>router</p>
                <p>2</p>
                <p>5</p>
                <p>{formatCurrency(4500)}</p>
              </Table.Row>
            )}
          />
        </Table>

        {/* {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem> */}

        {/* <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extraPrices
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price> */}
      </Section>

      <Footer>
        <p>
          Sub Total: <span>{formatCurrency(3500)}</span>{" "}
        </p>
        <p>
          {" "}
          Shipping Cost: <span>{formatCurrency(1500)}</span>
        </p>
        <p>
          Grand Total: <span>{formatCurrency(4500)}</span>
        </p>
        <p>Sold {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
