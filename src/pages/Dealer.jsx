import React from 'react';
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddDealer from '../features/dealers/AddDealer';
import DealerTable from '../features/dealers/DealerTable';


function Dealers() {
  return (
    <>
       <Row type="horizontal">
        <Heading as="h1">All Data Plans</Heading>
        {/* <DealerTableOperations/> */}
        <AddDealer />
      </Row>
      <Row>
        <DealerTable />
      </Row>
    </>
  );
}

export default Dealers;
