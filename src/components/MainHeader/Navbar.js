import { FaSearch, FaChevronDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Plantify_Website_Logo.avif";

import classes from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={classes.header}>
      <div className={classes.searchIcon}>
        <FaSearch className={classes.iconStyle} />
      </div>

      <ul className={classes.navLinks}>
        <li>
          SHOP <FaChevronDown className={classes.chevronIcon} />
        </li>
        <li>
          SERVICES <FaChevronDown className={classes.chevronIcon} />
        </li>
        <img src={logo} alt="Logo" />
        <li>
          PLANT CARE <FaChevronDown className={classes.chevronIcon} />
        </li>
        <li>
          CONTACTS <FaChevronDown className={classes.chevronIcon} />
        </li>
      </ul>

      <div className={classes.icons}>
        <span className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className={classes.iconWrapper} >
          <FontAwesomeIcon icon={faShoppingBag} />
        </span>
      </div>
    </div>
  );
};
export default Navbar;
