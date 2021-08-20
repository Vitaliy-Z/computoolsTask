import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import * as s from "./style.module.css";

const HomePage = () => {
  return (
    <Container>
      <h1 className={s.title}>
        This is a personality quiz
        <span role="img" aria-label="Icon" className={s.icon}>
          🎲
        </span>
      </h1>
      <Link to="/test" className={s.link}>
        let's start
      </Link>
    </Container>
  );
};

export default HomePage;
