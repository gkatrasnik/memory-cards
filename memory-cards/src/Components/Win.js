import { React } from "react";
import { Modal, Button } from "react-bootstrap";

function Win(props) {
  return (
    <Modal show={props.gameWin} onHide={() => props.resetGame()}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Congratulations, you win!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your score is: {props.score}</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.resetGame()}>Play Again</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default Win;
