import React from "react";
import { Line } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function Coingraph() {
  // Extracting necessary data from coinData
  const location = useLocation();
  const { name, sparkline, color } = location.state;

  function generateHoursList() {
    const hoursList = [];
    let curHour = new Date().getHours();

    for (let hour = 24; hour > 0; hour--) {
      let time = curHour - hour;
      hoursList.push(`${time}:00`);
    }

    return hoursList;
  }

  // Chart data in the form of a time series
  const chartData = {
    // Get 24 hours
    labels: generateHoursList(),
    datasets: [
      {
        label: `${name} Prices`,
        data: sparkline.map((price) => parseFloat(price)), // Converting sparkline data to numbers
        fill: true,
        borderColor: color,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center align-center">
      {/* <h2>{`${name} Price Chart`}</h2> */}
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `${name} prices over the last 24h`,
            },
          },
        }}
      />
    </div>
  );
}
