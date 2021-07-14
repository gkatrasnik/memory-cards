import { React } from "react";
import { Container } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  let renderedCards = [];
  for (let index = 0; index < 20; index++) {
    renderedCards.push(
      <Gamecard
        key={index}
        index={index}
        score={props.score}
        setScore={props.setScore}
      />
    );
  }

  return <Container className="d-flex flex-wrap">{renderedCards}</Container>;
}

export default Gameboard;
