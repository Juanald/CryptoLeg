import { Line } from "react-chartjs-2";

function generateHoursList() {
  const hoursList = [];

  for (let hour = 0; hour < 24; hour++) {
    hoursList.push(`${hour}:00`);
  }

  return hoursList;
}
console.log(generateHoursList());

let data = [];
for (let i = 0; i < 24; i++) {
  data.push(`1.${i}`);
}

const chartData = {
  // Get 24 hours
  labels: generateHoursList(),
  datasets: [
    {
      label: `BTC Price`,
      data: data.map((price) => parseFloat(price)), // Converting sparkline data to numbers
      fill: false,
      borderColor: "#f7931A",
      tension: 0.1,
    },
  ],
};

return (
  <div>
    <h2>{`BTC Price Chart`}</h2>
    <Line data={chartData} />
  </div>
);
