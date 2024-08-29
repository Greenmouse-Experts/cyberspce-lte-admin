import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BannerTable from "../features/banner/BannerTable";
import AddBanner from "../features/banner/AddBanner";
import ContactForm from "../features/contact/ContactForm";
import { useGetContact } from "../features/contact/useContact";
import Spinner from "../ui/Spinner";

function Contact() {
  const { contact, isLoading } = useGetContact();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Contact Info</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <ContactForm initialData={contact} />}
      </Row>
    </>
  );
}

export default Contact;
