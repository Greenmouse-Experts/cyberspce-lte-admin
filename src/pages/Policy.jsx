import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useGetContact } from "../features/contact/useContact";
import Spinner from "../ui/Spinner";
import TermForm from "../features/terms/TermForm";

function Policy() {
  const { contact, isLoading } = useGetContact();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Privacy Policy</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <TermForm initialData={[]} />}
      </Row>
    </>
  );
}

export default Policy;
