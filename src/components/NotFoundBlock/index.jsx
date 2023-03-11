import React from "react";
import styles from "./NotFoundBlock.module.scss";
import star from "./../../assets/img/zvezda.png";
import { Link } from "react-router-dom";

const NotFoundBlock = () => {
  return (
    <>
      <div className={styles.root}>
        <h1>404</h1>

        <div className={styles.zvezda}>
          <img src={star} alt="star" />
        </div>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundBlock;
