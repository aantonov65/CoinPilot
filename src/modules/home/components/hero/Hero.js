import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import Content from "./Content";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>top cryptocurrencies by market cap</h1>
        <Content />
        <h2>explore more</h2>
        <HashLink smooth to="/#market">
          <div className="animation-wrapper">
            <FontAwesomeIcon
              className="chevron-down"
              icon={faCircleChevronDown}
            />
          </div>
        </HashLink>
        <span className="desc">
          track, analyze, and stay updated on the cryptocurrency market
        </span>
      </div>
    </section>
  );
};

export default Hero;
