import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const params = useParams();
  const [chartDataResponse, setChartDataResponse] = useState({});
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=30`;
  const chartData = chartDataResponse.prices?.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setChartDataResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

  //Chart Setup
  const options = {
    responsive: true,
  };

  const data = {
    labels: chartData?.map((value) => moment(value.x).format("MMM DD HH:mm")),
    datasets: [
      {
        label:
          params.coinId.charAt(0).toUpperCase() +
          params.coinId.slice(1) +
          " Price",
        data: chartData?.map((value) => value.y),
        backgroundColor: "#8686b0",
        borderColor: "#2d2dc4",
      },
    ],
  };

  return (
    <div className="chart-column">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
