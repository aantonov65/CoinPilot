import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
