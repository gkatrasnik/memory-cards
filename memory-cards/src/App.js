import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import cards from "./Components/Cards";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [cardsArray, setCardsArray] = useState(cards); //cards from Cards.js array
  const [clickedCards, setClickedCards] = useState([]);
  const [renderedCards, setRenderedCards] = useState(cards);

  const randomizeCards = () => {
    //randomize original array before render. Fisher-Yates or Durstenfeld algorithm
    setRenderedCards();
  };

  //check if card was already clicked
  const checkClickedCard = () => {};

  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1>Memory Game</h1>
          </Navbar.Brand>
          <Scoreboard score={score} />
        </Container>
      </Navbar>
      <Gameboard
        score={score}
        setScore={setScore}
        setClickedCards={setClickedCards}
        clickedCards={clickedCards}
        renderedCards={renderedCards}
      />
    </Container>
  );
}

export default App;
