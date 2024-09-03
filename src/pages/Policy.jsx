import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import Spinner from "../ui/Spinner";
import { useGetPolicy } from "../features/policy/usePolicy";
import PolicyForm from "../features/policy/PolicyForm";

function Policy() {
  const { policy, isLoading } = useGetPolicy();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Privacy Policy</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <PolicyForm initialData={policy} />}
      </Row>
    </>
  );
}

export default Policy;
