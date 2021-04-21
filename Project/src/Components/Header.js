import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Components/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <Link to="/" className={styles["left"]}>
        DSA Sanjay
      </Link>
      <div className={styles["right"]}>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};
