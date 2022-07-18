import React from "react";
import styles from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>Luxury Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>
              Select from the top luxury VHCLs to roll around in style
            </span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src='https://images.unsplash.com/photo-1598195221927-fc335f446870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
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
            src='https://images.unsplash.com/photo-1549632891-a0bea6d0355b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1463&q=80'
            alt='Range Rover'
          />
          <div className={styles.content}>
            <h3>Range Rover</h3>
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
