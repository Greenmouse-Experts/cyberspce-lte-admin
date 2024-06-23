import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
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
  const { isLoading, bookings } = useRecentBookings();
  const {
    isLoading: isgettingStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const {isGettingStats, stats} = useStats()

  const { cabins, isLoading: isgettingCabins } = useCabins();
  if (isLoading || isgettingStays || isGettingStats) return <Spinner />;
  const {totalDealers,
    totalProducts,
    totalPlans,
    totalPlanOrders,
    totalProductOrders,
    totalProductOrderItems,
    monthlyProductPayments,
    monthlyPlanPayments,
    totalPlanSales, latestFiveProductOrders, totalProductSales} = stats


  console.log(stats)
 

  // const bookings = []
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        totalProducts={totalProducts}
        totalProductSales={totalProductSales}
        totalProductOrders={totalProductOrders}
        totalPlans={totalPlans}
      />
      <TodayActivity latestOrders={latestFiveProductOrders}  />
      <DurationChart confirmedStays={confirmedStays} />

      <SalesChart numDays={numDays} bookings={bookings} monthlyProductPayments={monthlyProductPayments} monthlyPlanPayments={monthlyPlanPayments}/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
