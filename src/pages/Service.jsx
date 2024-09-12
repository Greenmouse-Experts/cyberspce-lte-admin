import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import ServiceForm from "../features/service/ServiceForm";
import { useGetService } from "../features/service/useService";

function Service() {
  const { service, isLoading } = useGetService();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Service Page</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <ServiceForm initialData={service} />}
      </Row>
    </>
  );
}

export default Service;
