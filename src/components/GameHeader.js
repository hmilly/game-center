import React from 'react'
import { useState, useEffect } from "react";
import { Header } from "../styles/Game.details.styled";

const GameHeader = ({ name, text, start, setStart, count }) => {
    const [countdown, setCountdown] = useState(10)

const cd = () => setCountdown(countdown - 1)
    useEffect(() => {
        


        if (start && countdown > 0) {
            setInterval(() => {
                cd()
            }, 1000);

        } else if (!start || countdown === 0){
            setCountdown(10)
            clearInterval(cd);
            setStart(!start)
        }

    })

    return (
        <Header btnCol={start ? "red" : "lightgreen"}>
            <h1>{name}</h1>
            <p>{text}</p>
            <button onClick={() => setStart(!start)}>
                {start ? "Stop game" : "Start game"}
            </button>
            <p>Score: {count}</p>
            <p>Timer: {countdown}</p>
        </Header>
    )
}

export default GameHeader
