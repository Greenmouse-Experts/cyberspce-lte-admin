import React from "react";
import DealerTable from "../features/dealers/DealerTable";
import AddDealer from "../features/dealers/AddDealers";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dealer() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Dealers</Heading>
        <AddDealer />
      </Row>
      <Row>
        <DealerTable />
      </Row>
    </>
  );
}

export default Dealer;
