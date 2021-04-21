import React from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/Pages/Solutions.module.scss";
import { problems } from "../Data/Problems";
import { CodeBox } from "../Components/CodeBox";

export const Solutions = () => {
  const params = useParams();

  const problem = problems.find(problem => problem.id === params.name);

  return (
    <main className={styles["solutions"]}>
      <h1>
        {problem.title} ({problem.id})
      </h1>
      {problem.codes.map((link, index) => (
        <div key={index}>
          <CodeBox language="java" link={link} />
        </div>
      ))}
    </main>
  );
};
