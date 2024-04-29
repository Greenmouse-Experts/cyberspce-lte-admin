import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import OrderTable from "../features/bookings/OrderTable";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Orders</Heading>
        <BookingTableOperations />
      </Row>
      <OrderTable />
    </>
  );
}

export default Bookings;
