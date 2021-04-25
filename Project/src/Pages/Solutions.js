import React from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/Pages/Solutions.module.scss";
import { problems } from "../Data/Problems";
import { CodeBox } from "../Components/CodeBox";
import { useHistory } from "react-router-dom";

export const Solutions = () => {
  const params = useParams();
  const history = useHistory();

  const problem = problems.find(problem => problem.id === params.name);

  const goBack = () => {
    history.goBack();
  };

  return (
    <main className={styles["solutions"]}>
      <span className={styles["back"]} onClick={() => goBack()}>
        ◀ <span>Go Back</span>
      </span>
      <h1>
        {problem.title} ({problem.id})
      </h1>

      {problem.tutorial && (
        <div className={styles["tutorial"]}>
          <a href={problem.tutorial} target="_blank" rel="noopener noreferrer">
            Video Explaination
          </a>
        </div>
      )}

      {problem.codes.length === 0 && (
        <div className={styles["noSolution"]}>
          <p>No Solution for this question yet.</p>
          <a
            href="https://github.com/sanjay270899/dsa-sanjay"
            target="_blank"
            rel="noreferrer"
          >
            Contribute Now!
          </a>
        </div>
      )}

      {problem.codes.map((link, index) => (
        <div key={index}>
          <CodeBox language="java" link={link} />
        </div>
      ))}
    </main>
  );
};
