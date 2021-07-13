import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  let cards = [];
  for (let i = 0; i < 20; i++) {
    cards.push(
      <Gamecard key={i} i={i} score={props.score} setScore={props.setScore} />
    );
  }

  return (
    <Container>
      <Row>
        <Col> {cards}</Col>
      </Row>
    </Container>
  );
}

export default Gameboard;
