import React, { useState } from "react";

const Context = React.createContext({});

export function GameContextProvider({ children }) {
  const [calculate, setCal] = useState(false);
  const [tried, setTried] = useState(0);
  const [assert, setAssert] = useState(0);
  const [afterCard, setCard] = useState(null);
  const [inGame, setInGame] = useState(true);
  const [nDecks, setNumber] = useState(0);

  const addCard = ({ number, setOpened }) => {
    if (afterCard) {
      verifyCards({ number, setOpened });
    } else {
      setCard({ number, setOpened });
    }
  };

  const delCard = () => setCard(null);

  const pairExist = () => {
    setAssert((prev) => prev + 1);
    assert === nDecks / 2 && setInGame(false);
    delCard();
    setCal(false);
  };

  const dontPair = (setOpened) => {
    setTimeout(() => {
      setOpened(false);
      afterCard.setOpened(false);
      delCard();
      setCal(false);
    }, 1000);
  };

  const verifyCards = ({ number, setOpened }) => {
    setCal(true);
    setTried((prev) => prev + 1);
    number === afterCard.number ? pairExist() : dontPair(setOpened);
  };

  return (
    <Context.Provider
      value={{ calculate, tried, assert, addCard, inGame, setNumber }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
