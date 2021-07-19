import { React } from "react";
import { Container } from "react-bootstrap";
import Loose from "./Loose";
import Win from "./Win";

function Gameover(props) {
  return (
    <Container>
      <Win
        score={props.score}
        gameWin={props.gameWin}
        setGameWin={props.setGameWin}
        resetGame={props.resetGame}
      />

      <Loose
        score={props.score}
        gameLoose={props.gameLoose}
        setGameLoose={props.setGameLoose}
        resetGame={props.resetGame}
      />
    </Container>
  );
}

export default Gameover;
