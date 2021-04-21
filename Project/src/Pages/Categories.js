import React from "react";
import { Category } from "../Components/Category";
import styles from "../Styles/Pages/Categories.module.scss";

export const Categories = ({ categories, title, buttonText }) => {
  return (
    <main className={styles["categories"]}>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["container"]}>
        {categories.map((category, index) => (
          <Category category={category} key={index} buttonText={buttonText} />
        ))}
      </div>
    </main>
  );
};
