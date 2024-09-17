// import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useBanner } from "./useBanner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import BannerRow from "./BannerRow";

function BannerTable() {
  const { isLoading, banner } = useBanner();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!banner?.data?.length) return <Empty resourceName="banner" />;

 
  return (
    <Menus>
    
      {
        banner?.data.map((banner) => (
          <BannerRow banner={banner} key={banner.id} />
        ))
      }
       {/* <BannerRow banner={banner} key={""} /> */}
    </Menus>
  );
}

export default BannerTable;
