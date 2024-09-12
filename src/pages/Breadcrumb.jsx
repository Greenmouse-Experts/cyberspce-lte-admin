import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BreadcrumbTable from "../features/breadcrumb/BreadcrumbTable";
import AddBreadcrumb from "../features/breadcrumb/AddBreadcrumb";

function Breadcrumb() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Breadcrumbs</Heading>
        <AddBreadcrumb />
      </Row>
      <Row>
        <BreadcrumbTable />
      </Row>
    </>
  );
}

export default Breadcrumb;
