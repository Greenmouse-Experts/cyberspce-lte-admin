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

// import SignupForm from "../features/authentication/SignupForm";
// import Heading from "../ui/Heading";

// function NewUsers() {
//   return (
//     <>
//       <Heading as="h1">Create a new user</Heading>
//       <SignupForm />
//     </>
//   );
// }

// export default NewUsers;
