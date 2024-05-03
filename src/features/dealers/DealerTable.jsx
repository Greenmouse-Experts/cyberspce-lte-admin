// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import {usePlans } from "./useDealer";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import DealerRow from "./DealerRow";

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function DealerTable() {
  const { isLoading, plans } = usePlans();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if(!plans?.data?.length) return <Empty resourceName="plans"/>
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
      <Table columns="1.4fr 0.8fr 1fr 1.6fr 1.6fr 1fr 0.6fr">
        <Table.Header>
          <div>Name</div>
          <div>Price</div>
          <div>Validity</div>
          <div>Available Hour</div>
          <div>Available Day</div>
          <div>Created At</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          //data={cabins}
          // data={filteredCabins}
          data={plans?.data}
          render={(cabin) => <DealerRow cabin={cabin} key={cabin.id} />}
        />
        {/* {cabins.map()} */}
      </Table>
    </Menus>
  );
}

export default DealerTable;
