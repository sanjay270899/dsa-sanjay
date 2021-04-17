import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Components/Category.module.scss";

export const Category = ({ category }) => {
  return (
    <div className={styles["category"]}>
      <div className={styles["title"]}>{category.title}</div>
      <Link to={category.to}>
        <button>Pratice</button>
      </Link>
    </div>
  );
};