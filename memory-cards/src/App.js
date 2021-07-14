import React, { useState } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1>Memory Game</h1>
          </Navbar.Brand>
          <Scoreboard score={score} />
        </Container>
      </Navbar>
      <Gameboard score={score} setScore={setScore} />
    </Container>
  );
}

export default App;
