import { React } from "react";
import Loose from "./Loose";
import Win from "./Win";

function Gameover(props) {
  if (props.gameWin) {
    return <Win setGameWin={props.setGameWin} resetGame={props.resetGame} />;
  } else if (props.gameLoose) {
    return (
      <Loose setGameLoose={props.setGameLoose} resetGame={props.resetGame} />
    );
  } else {
    return null;
  }
}

export default Gameover;
