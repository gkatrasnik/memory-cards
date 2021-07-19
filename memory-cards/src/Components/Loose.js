import { React } from "react";
import { Modal, Button } from "react-bootstrap";

function Loose(props) {
  return (
    <Modal show={props.gameLoose} onHide={() => props.resetGame()}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Game Over, you loose</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your score: {props.score}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.resetGame()}>Try Again</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default Loose;
