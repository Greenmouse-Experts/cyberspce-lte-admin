import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useOrders } from "./useBookings";
import Spinner from "../../ui/Spinner"; 
import Pagination from "../../ui/Pagination";


function OrderTable() {
  const {orders, isLoading} = useOrders();

  if(isLoading) return <Spinner/>

  if(!orders?.data?.length) return <Empty resourceName="orders"/>

  return (
    <Menus>
      <Table columns="2fr 1.4fr 1fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>User</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={orders?.data}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={1}/>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OrderTable;
