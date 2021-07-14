import { React } from "react";
import { Card, Button } from "react-bootstrap";

function Scoreboard(props) {
  return <h3>Score: {props.score}</h3>;
}

export default Scoreboard;
