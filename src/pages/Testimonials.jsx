import React from 'react'
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddTestimonial from '../features/testimony/AddTestimony';

const Testimonials = () => {
  return (
    <div>
        <Row type="horizontal">
        <Heading as="h1">All Testimonials</Heading>
        {/* <DealerTableOperations/> */}
        <AddTestimonial />
      </Row>
      <Row>
        {/* <DealerTable /> */}
      </Row>
    </div>
  )
}

export default Testimonials