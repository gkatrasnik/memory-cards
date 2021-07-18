import { React } from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Gamecard(props) {
  const style = {
    width: "18%",
    borderRadius: "10px",
    margin: "3px",
    border: "1px solid black",
    padding: "5px",
  };
  return (
    <Image
      src={process.env.PUBLIC_URL + `/images/${props.card.id}.png`}
      style={style}
      onClick={() => {
        props.handlCardClick(props.card.id);
      }}
    />
  );
}

export default Gamecard;
