import { React } from "react";
import { Container } from "react-bootstrap";
import Gamecard from "./Gamecard";

function Gameboard(props) {
  //map cards.js array into gameBoard obejct
  const gameBoard = props.cardsArray.map((card, index) => {
    return (
      <Gamecard key={index} card={card} handlCardClick={props.handlCardClick} />
    );
  });

  return (
    <Container
      className="d-flex flex-wrap"
      style={{ maxWidth: 600, marginTop: 20 }}
    >
      {gameBoard}
    </Container>
  );
}

export default Gameboard;
