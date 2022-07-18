import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../images/DriveLogoDark.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='/' />
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href='/'>Learn More</a>
          </li>
          <li>
            <a href='/'>Log In</a>
          </li>
          <li>
            <a href='/'>Sign Up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn}>
        <AiOutlineMenu size={25} />
      </div>
    </header>
  );
};

export default Navbar;
