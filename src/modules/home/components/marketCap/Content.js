import MarketCapChart from "./PieChart";
import Loader from "../../../loader/Loader";

const Content = ({ isLoading, globalData }) => {
  if (!isLoading) {
    return <MarketCapChart globalData={globalData} />;
  } else if (isLoading === "error") {
    return <p className="error-message">Try again later :(</p>;
  } else {
    <Loader />;
  }
};

export default Content;
