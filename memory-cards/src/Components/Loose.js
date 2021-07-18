import { React } from "react";
import { Modal, Button } from "react-bootstrap";

function Loose(props) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>You Loose</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.resetGame()}>Try Again</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Loose;
