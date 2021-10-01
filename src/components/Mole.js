import React from "react";
import { useEffect, useState } from "react";
import mole from "../images/mole.png";

const Mole = ({ count, setCount, start }) => {
  console.log(start);
  const [t, setT] = useState(0);

  const timeout = () => {
    return Math.round(Math.random() * (800 - 1000) + 1000);
  };

  useEffect(() => {
    console.log(t);
    if (t === 0 && start) {
      const time = timeout();
      setTimeout(() => {
        setT(time);
      }, [time]);
    } else if (start) {
      const time = timeout();
      setTimeout(() => {
        setT(0);
      }, time);
    }
  }, [t, start]);

  const setScore = () => {
    setT(0);
    if (start) setCount((count += 5));
  };

  return (
    <li>
      {start && t > 0 ? (
        <img src={mole} onClick={() => setScore()} alt="mole" />
      ) : (
        ""
      )}
      <span>🕳️</span>
    </li>
  );
};

export default Mole;
