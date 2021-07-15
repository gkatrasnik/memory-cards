import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import cards from "./Components/Cards";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [cardsArray, setCardsArray] = useState(cards); //cards from Cards.js array
  const [renderedCards, setRenderedCards] = useState(cards);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {});

  const randomizeCards = () => {
    //randomize original array before render. Fisher-Yates or Durstenfeld algorithm
    setRenderedCards();
  };

  const handlCardClick = (index) => {
    let newCardsArray = cardsArray;

    //check if card was already clicked
    if (newCardsArray[index].clicked === false) {
      newCardsArray[index].clicked = true;
    } else {
      console.log("LOOOSEEEE!!!"); // --------> render game over component
      resetGame();
    }

    checkWin();
    setCardsArray(newCardsArray);
  };

  //check if all cards were clicked
  const checkWin = () => {
    if (cardsArray.every(checkClicked)) {
      console.log("WIIIINNNNNNN!"); // -----------> render win component
      resetGame();
    }

    function checkClicked(card) {
      return card.clicked === true;
    }
  };

  //reset game, set all cards.clicked to false
  const resetGame = () => {
    let newCardsArray = cardsArray;
    for (let i in newCardsArray) {
      newCardsArray[i].clicked = false;
    }
    setCardsArray(newCardsArray);
    setScore(0);
  };

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
        renderedCards={renderedCards}
        handlCardClick={handlCardClick}
      />
    </Container>
  );
}

export default App;
