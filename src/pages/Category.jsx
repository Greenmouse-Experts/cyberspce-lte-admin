import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CategoryTable from "../features/category/CategoryTable";
import CategoryTableOperations from "../features/Category/CategoryTableOperations";
import AddCategory from "../features/category/AddCategory";

function Categorys() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Categorys</Heading>
        
        <AddCategory />
      </Row>

      <Row>
        <CategoryTable />
      </Row>
    </>
  );
}

export default Categorys;
