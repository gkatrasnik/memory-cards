import { React, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function Gamecard(props) {
  const currentScore = props.score;

  const handleClick = () => {
    props.setScore(currentScore + 1);
  };
  return (
    <Card>
      {props.i}
      <Button onClick={handleClick}>CLICK</Button>
    </Card>
  );
}

export default Gamecard;
