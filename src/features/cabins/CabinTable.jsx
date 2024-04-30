import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { getProducts } from "../../services/apis/product-api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if(!products?.data?.length) return <Empty resourceName="cabins"/>
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
      <Table columns="1.6fr 1.4fr 1.0fr 1fr 1fr 1fr 0.6fr">
        <Table.Header>
          <div>Image</div>
          <div>name</div>
          <div>price</div>
          <div>category</div>
          <div>In Stock</div>
          <div>Status</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          //data={cabins}
          // data={filteredCabins}
          data={products?.data}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
