const Heading = ({ coin = {} }) => {
  return (
    <div className="coin-heading">
      <img src={coin.image.large} alt={coin.name} />
      <span>
        {coin.name}{" "}
        <span className="coin-tag">{coin.symbol.toUpperCase()}</span>
      </span>
      <span>
        $
        {coin.market_data.current_price.usd.toLocaleString("en-US", {
          useGrouping: true,
        })}
      </span>
    </div>
  );
};

export default Heading;
