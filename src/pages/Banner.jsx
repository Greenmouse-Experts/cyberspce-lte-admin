import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BannerTable from "../features/banner/BannerTable";
import AddBanner from "../features/banner/AddBanner";

function Banner() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Banners</Heading>
        <AddBanner />
      </Row>
      <Row>
        <BannerTable />
      </Row>
    </>
  );
}

export default Banner;
