import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import { device } from "../../styles/GlobalStyles";
import styled from "styled-components";
import { FaUsersViewfinder } from "react-icons/fa6";

const StyledStats = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  gap: 20px;
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-columns: 1fr;
`;

function Stats({

  totalPlans,
  totalProducts,
  totalProductSales,
  totalProductOrders,
  totalDealers,
  totalPlanSales
}) {
 

  return (
    <StyledStats>
      <Stat
        title="Orders"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={totalProductOrders}
      />
      <Stat
        title="Product Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalProductSales)}
      />
      <Stat
        title="Plan Sales"
        color="red"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalPlanSales)}
      />
      <Stat
        title="Products"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalProducts}
      />
      <Stat
        title="Plans"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={totalPlans}
      />
      <Stat
        title="Dealers"
        color="blue"
        icon={<FaUsersViewfinder />}
        value={totalDealers}
      />
    </StyledStats>
  );
}

export default Stats;
