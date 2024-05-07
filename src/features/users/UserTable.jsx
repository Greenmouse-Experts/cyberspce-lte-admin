
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useUsers";
import Spinner from "../../ui/Spinner"; 
import Pagination from "../../ui/Pagination";
import UserRow from "./UserRow";
import { useUsers } from "./useUser";


function UserTable() {
  const {loading, users} = useUsers();
  const count = users?.data?.length || 0

  if(loading) return <Spinner/>

  if(!users?.data?.length) return <Empty resourceName="customers"/>

  return (
    <Menus>
      <Table columns="1.2fr 2fr 1fr 0.8fr 1fr 0.6fr">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Date Joined</div>
          <div>Status</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={users?.data}
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
