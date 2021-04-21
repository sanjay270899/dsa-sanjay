import React from "react";
import styles from "../Styles/Pages/Questions.module.scss";
import { Link, useParams } from "react-router-dom";
import { problems } from "../Data/Problems";

export const Questions = ({ main }) => {
  const params = useParams();
  const topic = params.topic;

  return (
    <main className={styles["questions"]}>
      <h1>
        <Link to={`/${main}`} className={styles["main"]}>
          {`${main[0].toUpperCase()}${main.slice(1, main.length)}`}
        </Link>{" "}
        / {`${topic[0].toUpperCase()}${topic.slice(1, topic.length)}`}
      </h1>
      <section>
        {problems
          .filter(
            problem =>
              problem.tags.includes(main) && problem.tags.includes(topic)
          )
          .map((question, index) => (
            <div key={index} className={styles["question"]}>
              <a
                href={question.link}
                target="_blank"
                rel="noreferrer"
                className={styles["title"]}
              >
                {question.title}
              </a>
              <div>
                <span className={styles["difficulty"]}>
                  {question.difficulty}
                </span>
                <button>
                  <Link to={question.path}>Solution</Link>
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};
