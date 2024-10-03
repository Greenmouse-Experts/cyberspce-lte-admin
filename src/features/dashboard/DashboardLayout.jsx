import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useStats } from "./useStats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {

 
  const {isGettingStats, stats} = useStats()

  if (  isGettingStats) return <Spinner />;
  const {totalDealers,
    totalProducts,
    totalPlans,
    totalPlanOrders,
    totalProductOrders,
    totalProductOrderItems,
    monthlyProductPayments,
    monthlyPlanPayments,
    latestFivePlanOrders,
    
    totalPlanSales, latestFiveProductOrders, totalProductSales} = stats


  console.log(stats)
 

  // const bookings = []
  return (
    <StyledDashboardLayout>
      <Stats
       
        totalProducts={totalProducts}
        totalProductSales={totalProductSales}
        totalProductOrders={totalProductOrders}
        totalPlans={totalPlans}
        totalDealers={totalDealers}
        totalPlanSales={totalPlanSales}

      />
      <TodayActivity latestOrders={latestFiveProductOrders}  />
      {/* <TodayActivity latestOrders={latestFiveProductOrders}  /> */}
      <DurationChart confirmedStays={latestFivePlanOrders} />

      <SalesChart   monthlyProductPayments={monthlyProductPayments} monthlyPlanPayments={monthlyPlanPayments}/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

