import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./coinDetails.css";
import Content from "./components/Content";

const CoinDetails = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setCoin(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading("error");
      });
  }, [apiUrl]);

  return (
    <div className="center">
      <div className="coin-container">
        <Content isLoading={isLoading} coin={coin} />
      </div>
    </div>
  );
};

export default CoinDetails;
