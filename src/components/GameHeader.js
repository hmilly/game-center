import React from 'react'
import { useState, useEffect } from "react";
import { Header } from "../styles/Game.details.styled";

const GameHeader = ({ name, text, start, setStart, count }) => {
    const [countdown, setCountdown] = useState(60)

    useEffect(() => {
        if (start && countdown > 0) {
            setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (!start || countdown === 0) {
            setCountdown(60)
            setStart(false)
        }
    })


    return (
        <Header btnCol={start ? "red" : "lightgreen"}>
            <h1>{name}</h1>
            <p>{text}</p>
            <button onClick={() => setStart(!start)}>
                {start ? "Stop game" : "Start game"}
            </button>
            <div>
                <p>Count:</p>
                <p>{countdown}</p>
                <p>Score:</p>
                <p>{count}</p>
            </div>

        </Header>
    )
}

export default GameHeader
