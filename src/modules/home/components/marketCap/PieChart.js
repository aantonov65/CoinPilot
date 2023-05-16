import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ globalData }) => {
  const options = {
    responsive: true,
    plugins: {
      shadow: {
        enabled: true,
        color: "rgba(0, 0, 0, 0.2)",
        xOffset: 0,
        yOffset: 0,
        blur: 10,
      },
      legend: {
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let value = context.raw;
            return value.toFixed(2) + "%";
          },
        },
      },
    },
  };

  const data = globalData.data
    ? {
        labels: Object.keys(globalData.data.market_cap_percentage).map(
          (value) => {
            return value.toUpperCase();
          }
        ),
        datasets: [
          {
            label: "Market Cap Percentage",
            data: Object.values(globalData.data.market_cap_percentage),
            backgroundColor: [
              "#ffc219",
              "#522ad4",
              "#2ad471",
              "#ffea2b",
              "#5485f7",
              "#363940",
              "#3a28de",
              "#7fbaf5",
              "#dec26d",
              "#966dde",
            ],
          },
        ],
      }
    : null;
  return (
    <div className="market-cap-chart">
      {globalData.data ? <Pie options={options} data={data} /> : null}
    </div>
  );
};

export default PieChart;
