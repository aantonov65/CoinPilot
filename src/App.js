import "./App.css";
import Nav from "./modules/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./modules/home/Home";
import CoinDetails from "./modules/coinDetails/CoinDetails";

export const AppContext = createContext(null);

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setCoinsData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading("error");
      });
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ coinsData, isLoading, setIsLoading }}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin" element={<CoinDetails />}>
              <Route path=":coinId" element={<CoinDetails />} />
            </Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
