import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAnswers } from "../../redux/Selectors";
import Container from "../../components/Container";
import * as s from "./style.module.css";

const ResultPage = () => {
  const allAnswers = useSelector(getAllAnswers);

  const result = allAnswers.reduce((acc, value) => acc + value.indx, 0);

  return (
    <Container>
      <h1 className={s.title}>Your result</h1>
      {result <= 4 && (
        <h2 className={s.text}>
          <span role="img" aria-label="Icon" className={s.icon}>
            😎
          </span>
          You’re a very serious person!
          <span role="img" aria-label="Icon" className={s.icon}>
            😎
          </span>
        </h2>
      )}
      {result > 4 && result <= 8 && (
        <h2 className={s.text}>
          <span role="img" aria-label="Icon" className={s.icon}>
            😁
          </span>
          You have a wicked sense of humour!
          <span role="img" aria-label="Icon" className={s.icon}>
            😁
          </span>
        </h2>
      )}
      {result > 8 && result <= 12 && (
        <h2 className={s.text}>
          <span role="img" aria-label="Icon" className={s.icon}>
            😇
          </span>
          You’re a perfect mix of funny, chill, and intelligence!
          <span role="img" aria-label="Icon" className={s.icon}>
            😇
          </span>
        </h2>
      )}
      {result > 12 && (
        <h2 className={s.text}>
          <span role="img" aria-label="Icon" className={s.icon}>
            🤓
          </span>
          You’re shy and reserved!
          <span role="img" aria-label="Icon" className={s.icon}>
            🤓
          </span>
        </h2>
      )}

      <Link to="/test" className={s.link}>
        try again
      </Link>
    </Container>
  );
};

export default ResultPage;
