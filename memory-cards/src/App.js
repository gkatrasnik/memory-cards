import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import cards from "./Components/Cards";
import Gameover from "./Components/Gameover.js";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [cardsArray, setCardsArray] = useState(cards); //cards from Cards.js array
  const [gameWin, setGameWin] = useState(false);
  const [gameLoose, setGameLoose] = useState(false);

  useEffect(() => {
    // randomizeCards();
  });

  //Shuffle funtion - Fisher-Yates aglorithm
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  //Shuffle cardsArray
  const randomizeCards = () => {
    setCardsArray(shuffle(cardsArray));
  };

  const handlCardClick = (id) => {
    //find clicked card by ID
    const clickedCard = cardsArray.find((icon) => icon.id === id);

    //check if card was already clicked
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      setScore(score + 1);
    } else {
      setGameLoose(true);
    }

    checkWin();
  };

  //check if all cards were clicked
  const checkWin = () => {
    if (cardsArray.every(checkClicked)) {
      setGameWin(true); //GAME WIN
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
    setScore(0);
    setGameLoose(false);
    setGameWin(false);
    setCardsArray(newCardsArray);
  };

  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h2>Memory Game</h2>
          </Navbar.Brand>
          <Navbar.Text>
            <Scoreboard score={score} />
          </Navbar.Text>
        </Container>
      </Navbar>
      <Gameover
        score={score}
        gameWin={gameWin}
        setGameWin={setGameWin}
        gameLoose={gameLoose}
        setGameLoose={setGameLoose}
        resetGame={resetGame}
      />
      <Gameboard
        score={score}
        setScore={setScore}
        cardsArray={cardsArray}
        handlCardClick={handlCardClick}
      />
    </Container>
  );
}

export default App;
