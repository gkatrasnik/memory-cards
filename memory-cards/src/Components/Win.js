import { React } from "react";
import { Modal, Button } from "react-bootstrap";

function Win(props) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You WIN!!!</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.resetGame()}>Play Again</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Win;
