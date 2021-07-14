import { React } from "react";
import cards from "./Cards";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gamecard(props) {
  const handleClick = () => {
    props.setScore(props.score + 1);
  };

  const imgurl = props.index + 1;
  return (
    <Card style={{ width: 120, height: 120 }} onClick={handleClick}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/images/${imgurl}.png`}
        style={{ width: 100, height: 100 }}
      />
      <Card.Body></Card.Body>
    </Card>
  );
}

export default Gamecard;
