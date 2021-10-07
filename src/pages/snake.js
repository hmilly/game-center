import * as React from "react";
import { useState } from "react";
import { Container, Header } from "../styles/Game.details.styled";
import Layout from "../components/Layout"

const Snake = () => {
    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <Container>
                <Header btnCol={start ? "red" : "lightgreen"}>
                    <h1>Snake</h1>
                    <p>How much can you eat?</p>
                    <button onClick={() => setStart(!start)}>
                        {start ? "Stop game" : "Start game"}
                    </button>
                    <p>Score: {count}</p>
                </Header>
                {/*
                    <Canvas>

                    </Canvas> */}
            </Container>
        </Layout>
    )
}

export default Snake
