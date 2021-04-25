import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Components/Category.module.scss";

export const Category = ({ category, buttonText }) => {
  return (
    <div className={styles["category"]}>
      <div className={styles["title"]}>{category.title}</div>
      <p>Total Questions: {category.questionNumber}</p>
      <Link to={category.to}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};
