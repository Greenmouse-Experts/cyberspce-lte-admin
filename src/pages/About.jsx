import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ContactForm from "../features/contact/ContactForm";
import Spinner from "../ui/Spinner";
import { useGetAbout } from "../features/about/useAbout";
import AboutForm from "../features/about/AboutForm";

function About() {
  const { about, isLoading } = useGetAbout();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">About Page</Heading>
        {/* <AddBanner /> */}
      </Row>
      <Row>
        {isLoading && <Spinner />}

        {!isLoading && <AboutForm initialData={about} />}
      </Row>
    </>
  );
}

export default About;
