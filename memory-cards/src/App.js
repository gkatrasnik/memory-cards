import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import Scoreboard from "./Components/Scoreboard";
import Gameboard from "./Components/Gameboard";
import cards from "./Components/Cards";
import Loose from "./Components/Loose";
import Win from "./Components/Win";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [cardsArray, setCardsArray] = useState(cards); //cards from Cards.js array

  useEffect(() => {
    randomizeCards();
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
      console.log("LOOOSEEEE!!!"); // --------> render game over component
      setScore(0);
      resetGame();
    }

    checkWin();
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
    setScore(0);
    setCardsArray(newCardsArray);
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
        cardsArray={cardsArray}
        handlCardClick={handlCardClick}
      />
    </Container>
  );
}

export default App;
