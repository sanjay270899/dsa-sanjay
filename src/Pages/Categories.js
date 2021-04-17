import React, { useState } from "react";
import { Category } from "../Components/Category";
import styles from "../Styles/Pages/Categories.module.scss";

export const Categories = () => {
  const [categories, setCategories] = useState([
    {
      title: "Devsnest Questions",
      to: "/devsnest"
    },
    {
      title: "Babbar 450",
      to: "/babbar-450"
    }
  ]);

  return (
    <main className={styles["categories"]}>
      <div className={styles["title"]}>Categories</div>
      <div className={styles["container"]}>
        {categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
      </div>
    </main>
  );
};
