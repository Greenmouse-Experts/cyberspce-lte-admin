// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import CategoryRow from "./CategoryRow";
import { getCategories } from "../../services/apis/category-api";
import { useQuery } from "@tanstack/react-query";


function CategoryTable() {
   const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  if (isLoading) return <Spinner />;
  if (error) return 'Something went wrong';
  if(!categories?.data?.length) return <Empty resourceName="categories"/>
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr">
        <Table.Header>
          <div>CategoryName</div>
          <div>Date Created</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={categories?.data}
          render={(cabin) => <CategoryRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CategoryTable;
