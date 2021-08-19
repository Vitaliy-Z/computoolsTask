import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTest } from "../../redux/Operations";

const TestPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  return (
    <>
      <h1>this is TestPage</h1>
      <Link to="/result">get result</Link>
    </>
  );
};

export default TestPage;
