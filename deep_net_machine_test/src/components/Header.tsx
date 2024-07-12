import "../styles/header.css";
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/logo-transparent.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header--logo">
        <img src={logo} />
        <div>
          <h4 className="header--child--logo">
            <span className="logo--primary">DEEP</span>
            <span className="logo--secondary"> NET</span>
          </h4>
          <h4 className="header--child--logo">
            <span className="logo--gray"> SOFT</span>
          </h4>
        </div>
      </div>
      <img src={hamburger} className="hamburger--icon" />
      <div className="navigation--menu">
        <Link className="navigation--link" to={"/home"}>
          Home
        </Link>
        <Link className="navigation--link active" to={"/home"}>
          Home
        </Link>
        <Link className="navigation--link" to={"/home"}>
          Home
        </Link>
        <Link className="navigation--link" to={"/home"}>
          Home
        </Link>
        <Link className="navigation--link" to={"/home"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
