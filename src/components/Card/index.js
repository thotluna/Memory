import { useState } from "react";

import { types } from "types";
import { useDispatch } from "hooks/useDispatch";
import { useStore } from "hooks/useStore";

import "./Card.css";
export function Card({ character }) {
  const [opened, setOpened] = useState(false);
  const [number] = useState(character);
  const { calculate } = useStore();
  const dispatch = useDispatch();

  const handleOnCick = () => {
    if (!calculate) {
      setOpened(true);
      dispatch({ type: types.VERIFY, payload: { number, setOpened } });
    }
  };

  return (
    <>
      <div className="card">
        <div
          onClick={handleOnCick}
          className={
            opened ? "card__content card__content--active" : "card__content"
          }
        >
          <div className="card__front">
            <div className="cd"></div>
            <div className="cd"></div>
            <div className="cd"></div>
            <div className="cd"></div>
          </div>
          <div className="card__back">{number}</div>
        </div>
      </div>
    </>
  );
}
