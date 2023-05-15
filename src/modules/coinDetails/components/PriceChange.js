import PriceChangeElement from "../../common/components/PriceChangeElement";

const PriceChange = ({ coin = {} }) => {
  return (
    <div className="coin-change">
      <h3>Price Change</h3>
      <table>
        <thead>
          <tr>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>14d</th>
            <th>30d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <PriceChangeElement
              elementType="td"
              coin={coin}
              property={
                coin.market_data.price_change_percentage_1h_in_currency.usd
              }
            />
            <PriceChangeElement
              elementType="td"
              coin={coin}
              property={coin.market_data.price_change_percentage_24h}
            />
            <PriceChangeElement
              elementType="td"
              coin={coin}
              property={coin.market_data.price_change_percentage_7d}
            />
            <PriceChangeElement
              elementType="td"
              coin={coin}
              property={coin.market_data.price_change_percentage_14d}
            />
            <PriceChangeElement
              elementType="td"
              coin={coin}
              property={coin.market_data.price_change_percentage_30d}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceChange;
