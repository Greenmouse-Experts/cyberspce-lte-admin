import React from 'react';
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import PlanTable from '../features/plans/PlanTable';
import AddPlan from '../features/plans/AddPlan';


function Plans() {
  return (
    <>
       <Row type="horizontal">
        <Heading as="h1">All Data Plans</Heading>
        {/* <DealerTableOperations/> */}
        <AddPlan/>
      </Row>
      <Row>
        < PlanTable/>
      </Row>
    </>
  );
}

export default Plans;
