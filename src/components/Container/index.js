import React from "react";
import * as s from "./style.module.css";

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
