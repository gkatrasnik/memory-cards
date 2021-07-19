import { React } from "react";

function Scoreboard(props) {
  return (
    <div>
      <h4>Score: {props.score}</h4>
      <h4>High Score: {props.highScore}</h4>
    </div>
  );
}

export default Scoreboard;
