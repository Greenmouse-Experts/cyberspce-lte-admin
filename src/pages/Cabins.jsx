import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Products</Heading>
        <AddCabin />
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
