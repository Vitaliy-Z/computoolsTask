import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1> this is a personality quiz</h1>
      <Link to="/test">let's start</Link>
    </>
  );
};

export default HomePage;
