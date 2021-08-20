import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../redux/Actions";
import * as s from "./style.module.css";

const Test = ({ tests }) => {
  const [answer, setAnswer] = useState([]);
  const dispatch = useDispatch();

  const handleInput = (qstn, indx) => {
    setAnswer((state) => {
      if (state.length === 0) {
        return [{ qstn, indx }];
      }

      const findObj = state.some((s) => s.qstn === qstn);

      if (findObj) {
        return state.map((s) => (s.qstn === qstn ? { qstn, indx } : s));
      } else {
        return [...state, { qstn, indx }];
      }
    });
  };

  dispatch(addAnswer(answer));

  return (
    <ul className={s.questionList}>
      {tests.map((test) => (
        <li key={test.id} className={s.questionItem}>
          <h2 className={s.titleQuestion}>{test.question}</h2>
          <ul className={s.answersList}>
            {test.answers.map((answer, index) => (
              <li key={index} className={s.answerItem}>
                <label className={s.answerLabel}>
                  <input
                    type="radio"
                    name={test.question}
                    value={index}
                    onChange={() => {
                      handleInput(test.question, index);
                    }}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Test;
