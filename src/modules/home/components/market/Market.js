import Table from "./Table";
import "./market.css";

const Market = () => {
  return (
    <section id="market" className="market">
      <h2>Cryptocurrency Prices by Market Cap</h2>
      <Table />
    </section>
  );
};

export default Market;
