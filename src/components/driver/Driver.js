import React from "react";
import styles from "./Driver.module.css";
import Driving from "../../images/guydriving.png";

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Driving} alt='/' />
      </div>
      <div>
        <h2>
          Find your dream car <span>to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
