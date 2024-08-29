import styled from "styled-components";
import { format } from "date-fns";
import Select from "../../ui/Select";

import { formatCurrency } from "../../utils/helpers";
import { FaMapMarkerAlt, FaTruck, FaUserCircle } from "react-icons/fa";
import Table from "../../ui/Table";
import { useState } from "react";
import { useUpdateOrder } from "./useOrder";

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
    id,
    created_at,
    startDate,
    paid_at,
    items,
    user: { name: customerName, email } = {},
    delivery:{address, city, region} = {}
  } = order.data;

  const {updateOrderStatus, isUpdating} = useUpdateOrder()

  // console.log(order)

  const [selectedValue, setSelectedValue] = useState("");

  // Function to handle change in the Select component
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if(newValue){
      updateOrderStatus({
        order_id:id,
        status:newValue,
 
      })
    }
    console.log(newValue)
    // You can perform any other actions here based on the selected value
  };

  const totalAmount = items.reduce((sum, item) => {
    return sum + parseFloat(item.amount);
  }, 0);

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
            { value: "Awaiting Payment", label: "Awaiting Payment" },
            { value: "Confirmed", label: "Confirmed" },
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
              <p>{customerName}</p>
              <p>{email}</p>
            </div>
          </Customer>
          <Customer>
            <FaTruck size={40} />
            <div>
              <p>Order Info</p>
              <p>Shipping: {city}</p>
              <p>Payment method: CyberPay</p>
            </div>
          </Customer>
          <Customer>
            <FaMapMarkerAlt size={40} />
            <div>
              <p>Delivered To</p>
              <p>{address}, {region} </p>
            </div>
          </Customer>
        </CustomerDetails>
        <Table columns="2fr 1.4fr 1fr 1.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Product ID</div>
            {/* <div>Unit</div> */}
            <div>Quantity</div>
            <div>Total</div>
          </Table.Header>

          <Table.Body
            data={items}
            render={(item) => (
              <Table.Row>
                <p>{item.id}</p>
                {/* <p>1</p> */}
                <p>{item.quantity}</p>
                <p>{formatCurrency(item.amount)}</p>
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
        <p></p>
        <p>
          Sub Total: <span>{formatCurrency(totalAmount)}</span>{" "}
        </p>
        <p>
          {" "}
          Shipping Cost: <span>{formatCurrency(0)}</span>
        </p>
        <p>
          Grand Total: <span>{formatCurrency(totalAmount)}</span>
        </p>
        <p>Sold {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
