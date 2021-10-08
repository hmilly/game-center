import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout"
import GameHeader from "../components/GameHeader";
import { Container } from "../styles/Game.details.styled";

const Snake = () => {
    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (start) setCount(0);
    }, [start]);

    return (
        <Layout>
            <Container>
                <GameHeader
                    name="Snake"
                    text="How much can you eat?"
                    start={start}
                    setStart={setStart}
                    count={count}
                />
                {/*
                    <Canvas>

                    </Canvas> */}
            </Container>
        </Layout>
    )
}

export default Snake
