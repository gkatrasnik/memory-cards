import { React, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";
import cards from "./Cards";

function Gamecard(props) {
  const handleClick = () => {
    props.setScore(props.score + 1);
  };

  const imgurl = props.index + 1;
  return (
    <Card>
      {props.i}
      <Image
        src={process.env.PUBLIC_URL + `/images/${imgurl}.png`}
        style={{ width: 200, height: 200 }}
      />
    </Card>
  );
}

export default Gamecard;
