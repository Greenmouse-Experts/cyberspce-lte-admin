
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useUsers";
import Spinner from "../../ui/Spinner"; 
import Pagination from "../../ui/Pagination";
import UserRow from "./UserRow";


function UserTable() {
  const {bookings, isLoading, count} = useBookings();

  if(isLoading) return <Spinner/>

  if(!bookings.length) return <Empty resourceName="bookings"/>

  return (
    <Menus>
      <Table columns="2fr 1.4fr 1fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Dates</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <UserRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count}/>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
