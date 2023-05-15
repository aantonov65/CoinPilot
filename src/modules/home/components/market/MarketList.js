import { Link } from "react-router-dom";
import CoinDetails from "../../../coinDetails/CoinDetails";
import PriceChangeElement from "../../../common/components/PriceChangeElement";

const MarketList = ({ coinsData = [], page = 1 }) => {
  return coinsData.slice((page - 1) * 10, page * 10).map((item) => {
    console.log(coinsData);
    return (
      <Link to={`coin/${item.id}`} key={item.id} element={<CoinDetails />}>
        <div className="coins-row">
          <span className="coin-rank">#{item.market_cap_rank}</span>
          <span className="coin-name">
            <img src={item.image} alt={item.name} />
            {item.name}
            <span>{item.symbol.toUpperCase()}</span>
          </span>
          <span className="coin-price">
            $
            {item.current_price.toLocaleString("en-US", {
              useGrouping: true,
            })}
          </span>
          <PriceChangeElement
            elementType="span"
            data={item}
            property={item.price_change_percentage_24h}
          />
          <span className="coin-cap">
            $
            {item.market_cap.toLocaleString("en-US", {
              useGrouping: true,
            })}
          </span>
        </div>
      </Link>
    );
  });
};

export default MarketList;
