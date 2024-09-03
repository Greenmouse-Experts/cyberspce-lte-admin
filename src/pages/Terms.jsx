import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BannerTable from "../features/banner/BannerTable";
import AddBanner from "../features/banner/AddBanner";
import ContactForm from "../features/contact/ContactForm";
import { useGetContact } from "../features/contact/useContact";
import Spinner from "../ui/Spinner";
import TermForm from "../features/terms/TermForm";
import { useGetTerms } from "../features/terms/useTerm";

function Terms() {
  const { terms, isLoading } = useGetTerms();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Terms and Conditions</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <TermForm initialData={terms} />}
      </Row>
    </>
  );
}

export default Terms;
