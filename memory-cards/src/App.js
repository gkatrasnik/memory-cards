import { Container, Row, Col, Navbar, Card } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import "./App.css";

function App() {
  return (
    <Container>
      <Navbar>
        Navbar
        <Scoreboard />
      </Navbar>
      <Row>
        <Col>
          <Gameboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
