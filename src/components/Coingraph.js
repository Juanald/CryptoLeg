import React from "react";
import { Line } from "react-chartjs-2";

export default function Coingraph({ coinData }) {
  // Extracting necessary data from coinData
  const { name, sparkline } = coinData;

  // Chart data
  const chartData = {
    labels: Array.from({ length: sparkline.length }, (_, i) => i + 1), // Assuming labels are sequential numbers
    datasets: [
      {
        label: `${name} Price`,
        data: sparkline.map((price) => parseFloat(price)), // Converting sparkline data to numbers
        fill: false,
        borderColor: "#f7931A",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>{`${name} Price Chart`}</h2>
      <Line data={chartData} />
    </div>
  );
}
