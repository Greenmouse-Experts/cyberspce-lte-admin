import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BannerTable from "../features/banner/BannerTable";
import AddBanner from "../features/banner/AddBanner";
import ContactForm from "../features/contact/ContactForm";
import { useGetContact } from "../features/contact/useContact";
import Spinner from "../ui/Spinner";
import TermForm from "../features/terms/TermForm";

function Terms() {
  const { contact, isLoading } = useGetContact();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Terms and Conditions</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <TermForm initialData={[]} />}
      </Row>
    </>
  );
}

export default Terms;
