import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>VHCL+</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from top luxury vehicles to roll around in style</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9sbHMlMjByb3ljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Rolls Royce'
          />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1614292493063-ccfd9dd1f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hc2VyYXRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='Maserati'
          />
          <div className={styles.content}>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1617917572835-5ab878656dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZlcnJhcml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='Ferrari'
          />
          <div className={styles.content}>
            <h3>Ferrari</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='Porsche'
          />
          <div className={styles.content}>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
