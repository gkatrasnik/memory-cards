import { React } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gamecard(props) {
  return (
    <Card
      style={{ width: 120, height: 120 }}
      onClick={() => {
        props.handlCardClick(props.card.id);
      }}
    >
      <Card.Img
        src={process.env.PUBLIC_URL + `/images/${props.card.id}.png`}
        style={{ width: 100, height: 100 }}
      />
    </Card>
  );
}

export default Gamecard;
