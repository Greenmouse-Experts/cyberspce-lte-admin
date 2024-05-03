// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useCabins } from "./useBlog";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import BlogRow from "./BlogRow";


function BlogTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if(!cabins.length) return <Empty resourceName="cabins"/>
  //FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //SORT

  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>User</div>
          <div>Title</div>
          <div>Desccription</div>
          <div>Date</div>
          <div></div>
        </Table.Header>
        <Table.Body
          //data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <BlogRow cabin={cabin} key={cabin.id} />}
        />
        {/* {cabins.map()} */}
      </Table>
    </Menus>
  );
}

export default BlogTable;
