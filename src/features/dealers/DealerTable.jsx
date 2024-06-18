// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import {useDealer } from "./useDealer";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import DealerRow from "./DealerRow";

function DealerTable() {
  const { isLoading, dealers } = useDealer();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if(!dealers?.data?.length) return <Empty resourceName="dealer"/>
  //FILTER
  // const filterValue = searchParams.get("discount") || "all";

  // let filteredCabins;
  // if (filterValue === "all") filteredCabins = cabins;
  // if (filterValue === "no-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  // if (filterValue === "with-discount")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //SORT

  // const sortBy = searchParams.get("sortBy") || "startDate-asc";

  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredCabins.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  return (
    <Menus>
      <Table columns="1.4fr 1.6fr 0.8fr 1fr 1fr 1fr 0.5fr ">
        <Table.Header>
          <div>Name</div>
          <div>Address</div>
          <div>Region</div>
          <div>Phone 1</div>
          <div>Phone 2</div>
          <div>Date Added</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          //data={cabins}
          // data={filteredCabins}
          data={dealers?.data}
          render={(cabin) => <DealerRow cabin={cabin} key={cabin.id} />}
        />
        {/* {cabins.map()} */}
      </Table>
    </Menus>
  );
}

export default DealerTable;
