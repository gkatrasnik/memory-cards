import { React } from "react";

function Scoreboard(props) {
  return (
    <div>
      <h5>Score: {props.score}</h5>
      <h5>High Score: {props.highScore}</h5>
    </div>
  );
}

export default Scoreboard;
