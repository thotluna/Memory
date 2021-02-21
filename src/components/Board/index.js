import { useEffect, useState } from "react";

import { stateInGame, types } from "types";
import { useStore } from "hooks/useStore";
import { useDispatch } from "hooks/useDispatch";

import getDecks from "utils/getDesks";

import "./Board.css";
import { Card } from "../Card";

export function Board() {
  const { nDecks, inGame, cards, assert } = useStore();
  const dispatch = useDispatch();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    setDecks(getDecks(nDecks));
  }, [nDecks]);

  useEffect(() => {
    dispatch({ type: types.CHECK });
    if (cards[1]) {
      const interval = setTimeout(() => {
        dispatch({ type: types.COMPARATE });
      }, 1000);
      return () => clearTimeout(interval);
    }

    console.log("cerrando");

    dispatch({ type: types.CHECKED });
  }, [cards, dispatch]);

  useEffect(() => {
    console.log("enrtando", { assert, nDecks });
    if (assert === nDecks) {
      dispatch({ type: types.CULMINATED });
    }
  }, [assert, nDecks, dispatch]);

  return (
    <>
      {inGame === stateInGame.PLAY && (
        <div className="board__content">
          {decks.map((number, index) => (
            <Card key={index} character={number} />
          ))}
        </div>
      )}
      {inGame === stateInGame.WAITTING && <h1>Play</h1>}
      {inGame === stateInGame.WON && <h1>You Are Won</h1>}
    </>
  );
}
