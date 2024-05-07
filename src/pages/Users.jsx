import UserTable from "../features/users/UserTable";
// import UserTableOperations from "../features/users/UserTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";


function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Users</Heading>
        {/* <UserTableOperations /> */}
      </Row>
      <UserTable />
    </>
  );
}

export default Users;
