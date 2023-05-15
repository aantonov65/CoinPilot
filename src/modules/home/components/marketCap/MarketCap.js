import { useState, useEffect } from "react";
import "./marketCap.css";
import axios from "axios";
import Content from "./Content";

const MarketCap = () => {
  const [globalData, setGlobalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = "https://api.coingecko.com/api/v3/global";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setGlobalData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading("error");
      });
  }, []);

  return (
    <section className="market-cap">
      <div className="market-cap-container">
        <h2>Biggest Coins by Market Cap</h2>
        <Content isLoading={isLoading} globalData={globalData} />
      </div>
    </section>
  );
};

export default MarketCap;
