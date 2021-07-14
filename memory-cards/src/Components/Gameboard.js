import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  let cards = [];
  for (let index = 0; index < 20; index++) {
    cards.push(
      <Gamecard
        key={index}
        index={index}
        score={props.score}
        setScore={props.setScore}
      />
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
