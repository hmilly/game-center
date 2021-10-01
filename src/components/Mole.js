import React from "react";
import { useState, useEffect } from "react";
import mole from "../images/mole.png";

const Mole = ({show}) => {
  // const int = () => {
  //   return Math.round(Math.random() * (200 - 1000) + 1000);
  // };

  // useEffect(() => {
  //   const t = int();

  //   setTimer(t);

  //   setTimeout(() => {
  //     setTimer(0);
  //   }, t);

  // }, []);

  return (
    <li>
      {show && <img src={mole} alt="mole" />}
      <span>🕳️</span>
    </li>
  );
};

export default Mole;
