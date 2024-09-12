// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import {  useBreadCrumb } from "./useBreadcrumb";
// import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import BreadcrumbRow from "./BreadcrumbRow";



function BreadcrumbTable() {
  const { isLoading, breadcrumb } = useBreadCrumb();

  if (isLoading) return <Spinner />;
  if (!breadcrumb?.data?.length) return <Empty resourceName="Breadcrumb" />;

  return (
    <Menus>
      
      {
        breadcrumb?.data.map((breadcrumb) => (
          <BreadcrumbRow breadcrumb={breadcrumb} key={breadcrumb.id} />
        ))
      }
    
    </Menus>
  );
}

export default BreadcrumbTable;
