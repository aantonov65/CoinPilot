import { useContext, useState } from "react";
import { AppContext } from "../../../../App";
import Loader from "../../../loader/Loader";
import TablePagination from "./TablePagination";
import MarketList from "./MarketList";

const Table = () => {
  const { coinsData, isLoading } = useContext(AppContext);
  const [page, setPage] = useState(1);

  if (!isLoading) {
    return (
      <>
        <div className="coins-container">
          <div className="coins-heading">
            <span className="coin-rank">Rank</span>
            <span className="coin-name">Name</span>
            <span className="coin-price">Price</span>
            <span className="coin-price-change">24h %</span>
            <span className="coin-cap">Market Cap</span>
          </div>
          <MarketList coinsData={coinsData} page={page} />
        </div>
        <TablePagination page={page} setPage={setPage} />
      </>
    );
  } else if (isLoading === "error") {
    return <p className="error-message">Try again later :(</p>;
  } else {
    return <Loader />;
  }
};

export default Table;
