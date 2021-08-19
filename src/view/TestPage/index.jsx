import React from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  return (
    <>
      <h1>this is TestPage</h1>
      <Link to="/result">get result</Link>
    </>
  );
};

export default TestPage;
