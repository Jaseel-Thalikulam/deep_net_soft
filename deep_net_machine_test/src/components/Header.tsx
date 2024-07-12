import "../styles/header.css";
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/logo-transparent.svg";
import { Link ,useLocation} from "react-router-dom";

const Header = () => {
const location = useLocation();


  const currentPath = location.pathname;
  
const links = [
  { to: "/home", text: "Home" },
  { to: "/menu", text: "Menu" },
  { to: "/reservation", text: "Make a Reservation" },
  { to: "/contact", text: "Contact Us" },
];
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
        {links.map((link, index) => (
          <Link
            key={index}
            className={`navigation--link ${
              currentPath.startsWith(link.to) ? "active" : null
            }`}
            to={link.to}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
