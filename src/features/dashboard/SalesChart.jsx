import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  box-shadow: var(--shadow-sm);
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

// Your yearly data
const monthlyProductPayments = [
  { month: 'January', year: '2023', total_amount: 0 },
  { month: 'February', year: '2023', total_amount: 0 },
  { month: 'March', year: '2023', total_amount: 0 },
  { month: 'April', year: '2023', total_amount: 0 },
  { month: 'May', year: '2023', total_amount: 0 },
  { month: 'June', year: '2024', total_amount: 778000 },
  { month: 'July', year: '2023', total_amount: 0 },
  { month: 'August', year: '2023', total_amount: 0 },
  { month: 'September', year: '2023', total_amount: 0 },
  { month: 'October', year: '2023', total_amount: 0 },
  { month: 'November', year: '2023', total_amount: 0 },
  { month: 'December', year: '2023', total_amount: 0 }
];

function SalesChart({monthlyProductPayments, monthlyPlanPayments}) {
  const { isDarkMode } = useDarkMode();

  // Convert data to the format required by the chart
  const productChartData = monthlyProductPayments.map((data) => ({
    label: `${data.month} ${data.year}`,
    totalSales: data.total_amount,
  }));

  const planChartData = monthlyPlanPayments.map((data) => ({
    label: `${data.month} ${data.year}`,
    planSales: data.total_amount,
  }));

  // Merge the two datasets
  const mergedChartData = productChartData.map((productData, index) => ({
    ...productData,
    planSales: planChartData[index].planSales,
  }));

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        planSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        planSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales for the Year {monthlyProductPayments[0].year}
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={mergedChartData}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="₦"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Product Sales"
            unit="₦"
          />
          <Area
            dataKey="planSales"
            type="monotone"
            stroke={colors.planSales.stroke}
            fill={colors.planSales.fill}
            strokeWidth={2}
            name="Total Plan Sales"
            unit="₦"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
