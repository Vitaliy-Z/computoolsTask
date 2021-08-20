import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTest } from "../../redux/Operations";
import { getAllTests } from "../../redux/Selectors";
import Container from "../../components/Container";
import Test from "../../components/Test";
import * as s from "./style.module.css";

const TestPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  const tests = useSelector(getAllTests);

  return (
    <Container>
      <h1 className={s.title}>Select answers to questions</h1>
      <Test tests={tests} />
      <div className={s.btnsBlock}>
        <Link to="/" className={s.link}>
          go home
        </Link>
        <Link to="/result" className={s.link}>
          show result
        </Link>
      </div>
    </Container>
  );
};

export default TestPage;
