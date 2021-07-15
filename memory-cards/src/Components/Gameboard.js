import { React } from "react";
import { Container } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  //map cards.js array into gameBoard obejct
  const gameBoard = props.cardsArray.map((card, index) => {
    return (
      <Gamecard
        key={index}
        index={index}
        score={props.score}
        setScore={props.setScore}
        card={card}
        handlCardClick={props.handlCardClick}
      />
    );
  });

  return <Container className="d-flex flex-wrap">{gameBoard}</Container>;
}

export default Gameboard;
