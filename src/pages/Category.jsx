import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CategoryTable from "../features/category/CategoryTable";
import AddCategory from "../features/category/AddCategory";

function Categorys() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Categories</Heading>
        <AddCategory />
      </Row>
      <Row>
        <CategoryTable />
      </Row>
    </>
  );
}

export default Categorys;
