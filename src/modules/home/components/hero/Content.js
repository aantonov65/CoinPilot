import { useContext } from "react";
import { AppContext } from "../../../../App";
import Loader from "../../../loader/Loader";
import CoinCard from "./CoinCard";

const CoinsContent = () => {
  const { isLoading } = useContext(AppContext);
  if (!isLoading) {
    return (
      <div className="coins-row">
        <CoinCard index={0} />
        <CoinCard index={1} />
        <CoinCard index={2} />
        <CoinCard index={3} />
      </div>
    );
  } else if (isLoading === "error") {
    return <p className="error-message">Try again later :(</p>;
  } else {
    return <Loader />;
  }
};

export default CoinsContent;
