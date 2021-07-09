import { React } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  return (
    <Container>
      <Gamecard />
      <Gamecard />
      <Gamecard />;
    </Container>
  );
}

export default Gameboard;
