import React, { useState, useRef, useEffect } from "react";
import { Container } from "../styles/Game.details.styled";
import Layout from "../components/Layout"
import GameHeader from "../components/GameHeader";
import { PlayArea } from "../styles/Game.content.styled";
import pieImg from "../images/pie.jpg";
import useInterval from "../fns/snakeFns";

const canvasX = 1000;
const canvasY = 1000;
const initSnake = [
  [4, 10],
  [4, 10],
];
const initPie = [14, 10];
const scale = 50;
const timeDelay = 100;

const SnakeGame = ({
  ...props
}: {
  count: number;
  setCount: (count: number) => void;
  start: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState(initSnake);
  const [pie, setPie] = useState(initPie);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
 // const [score, setScore] = useState<Istate["score"]>(0);

  useEffect(() => {
    if (props.start) props.setCount(0);
  }, [props.start]);



  useInterval(() => runGame(), delay);

  useEffect(() => {
    let food = document.getElementById("food") as HTMLCanvasElement;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#004602";
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
        ctx.drawImage(food, pie[0], pie[1], 1, 1);
      }
    }
  }, [snake, pie, props.start]);

  const play = () => {
    setSnake(initSnake);
    setPie(initPie);
    setDirection([1, 0]);
    setDelay(timeDelay);
    props.setCount(0);
    // setStart(true);
  };

  const checkCollision = (head: number[]) => {
    head.map((coord) => coord < 0 || coord * scale >= canvasX) ||
      snake.map((s) => head[0] === s[0] && head[1] === s[1]);
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  };

  const pieAte = (newSnake: number[][]) => {
    let coord = pie.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === pie[0] && newSnake[0][1] === pie[1]) {
      let newPie = coord;
      props.setCount(props.count + 5);
      setPie(newPie);
      return true;
    }
    return false;
  };

  const runGame = () => {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      //setStart(false);
    }
    if (!pieAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  };

  return (

    <PlayArea
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => changeDirection(e)}
    >
      <img id="food" src={pieImg} alt="food" width="0" />
      <canvas ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
      {!props.start && <p>Game Over!</p>}
      <div>
        <h2>Score: {props.count}</h2>
      </div>
    </PlayArea>

  );
};

export default SnakeGame;
