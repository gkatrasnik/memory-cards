import { React } from "react";

function Scoreboard(props) {
  return (
    <div>
      <h6>Score: {props.score}</h6>
      <h6>High score: {props.highScore}</h6>
    </div>
  );
}

export default Scoreboard;
