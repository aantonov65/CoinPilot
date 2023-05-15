import Heading from "./Heading";
import Stats from "./Stats";
import PriceChange from "./PriceChange";
import LineChart from "./LineChart";
import Loader from "../../loader/Loader";

const Content = ({ isLoading = true, coin = {} }) => {
  if (!isLoading) {
    return (
      <>
        <div className="data-column">
          <Heading coin={coin} />
          <Stats coin={coin} />
          <PriceChange coin={coin} />
        </div>
        <LineChart />
      </>
    );
  } else if (isLoading === "error") {
    <p className="error-message">Try again later :(</p>;
  } else {
    return <Loader />;
  }
};

export default Content;
