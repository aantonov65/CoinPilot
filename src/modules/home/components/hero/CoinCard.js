import { useContext } from "react";
import { AppContext } from "../../../../App";
import { Link } from "react-router-dom";
import PriceChangeElement from "../../../common/components/PriceChangeElement";
import CoinDetails from "../../../coinDetails/CoinDetails";

const CoinCard = ({ index }) => {
  const { coinsData } = useContext(AppContext);
  return (
    <Link to={`coin/${coinsData[index].id}`} element={<CoinDetails />}>
      <div className="coin-card">
        <img src={coinsData[index].image} alt={coinsData[index].name} />
        <div className="coin-wrapper">
          <div>
            {coinsData[index].name}
            <span className="coin-tag">{coinsData[index].symbol}</span>
          </div>
          <div>
            {coinsData[index].current_price.toLocaleString("en-US", {
              useGrouping: true,
            })}
            $
            <PriceChangeElement
              elementType="span"
              data={coinsData}
              property={coinsData[index].price_change_percentage_24h}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
