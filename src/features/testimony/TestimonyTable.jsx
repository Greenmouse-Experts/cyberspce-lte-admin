import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useTestimony } from "./useTestimony";
import TestimonyRow from "./TestimonyRow";

function TestimonyTable() {
  const { isLoading, testimony } = useTestimony();

  if (isLoading) return <Spinner />;
  if(!testimony?.data?.length) return <Empty resourceName="testimonials"/>

  return (
    <Menus>
      <Table columns="1.4fr 1.6fr 1fr 1fr 0.5fr ">
        <Table.Header>
          <div>Name</div>
          <div>Review</div>
          <div>Profession</div>
          <div>Date Created</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={testimony?.data}
          render={(cabin) => <TestimonyRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default TestimonyTable;
