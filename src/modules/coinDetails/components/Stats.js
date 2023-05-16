const CoinStats = ({ coin = {} }) => {
  return (
    <div className="coin-stats">
      <div>
        <div>
          24h High:
          <span className="price-up">${coin.market_data.high_24h.usd}</span>
        </div>
        <div>
          24h Low:
          <span className="price-down">${coin.market_data.low_24h.usd}</span>
        </div>
      </div>
      <div>
        <div>
          Market Cap:
          <span className="cap">
            $
            {coin.market_data.market_cap.usd.toLocaleString("en-US", {
              useGrouping: true,
            })}
          </span>
        </div>
        <div>
          Circulating Supply:
          <span className="supply">{coin.market_data.circulating_supply}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
