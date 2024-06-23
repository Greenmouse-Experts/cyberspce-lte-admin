import React from 'react';
import styled from 'styled-components';
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    productType: "Switch",
    value: 0,
    color: "#ef4444",
  },
  {
    productType: "Router",
    value: 0,
    color: "#3b82f6",
  },
];

const startDataDark = [
  {
    productType: "Switch",
    value: 0,
    color: "#b91c1c",
  },
  {
    productType: "Router",
    value: 0,
    color: "#1d4ed8",
  },
];

const dummySalesData = [
  { productType: "Switch", sales: 300 },
  { productType: "Router", sales: 500 },
];

function prepareData(startData, salesData) {
  return salesData.map((sale) => {
    const matchedItem = startData.find((item) => item.productType === sale.productType);
    if (matchedItem) {
      return { ...matchedItem, value: sale.sales };
    }
    return matchedItem;
  }).filter(item => item);
}

function DurationChart({ salesData = dummySalesData }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, salesData);

  return (
    <ChartBox>
      <Heading as="h2">Product Sales Statistics</Heading>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            nameKey="productType"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            fill="#8884d8"
            paddingAngle={3}
          >
            {data?.map((sale) => (
              <Cell key={sale.productType} fill={sale.color} stroke={sale.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
