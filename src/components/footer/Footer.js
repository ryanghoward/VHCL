import React from "react";
import LogoDark from "../../images/VHCLLogoDark.PNG";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={LogoDark} alt='' />
        <button>Share your VHCL</button>
      </div>
    </div>
  );
};

export default Footer;
