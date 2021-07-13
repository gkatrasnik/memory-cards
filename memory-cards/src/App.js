import React, { useState } from "react";
import { Container, Row, Col, Navbar, Card } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <Container>
      <Navbar>
        Navbar
        <Scoreboard score={score} />
      </Navbar>
      <Row>
        <Col>
          <Gameboard score={score} setScore={setScore} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
