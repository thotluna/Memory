import { useState, useEffect, useRef } from "react";
import { stateInGame, types } from "types";
import { useDispatch } from "./useDispatch";
import { useStore } from "./useStore";

function getDiff(timestamp) {
  const now = new Date();
  const elapsed = timestamp - now;

  return Math.floor(Math.abs(elapsed / 1000));
}

export default function useTimeGame({ initial }) {
  const [time, setTime] = useState(0);
  const timeInitial = useRef(initial);
  const { inGame } = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inGame === stateInGame.PLAY) {
      const interval = setInterval(() => {
        const diff = getDiff(timeInitial.current);

        setTime(`${diff} segundos`);
        dispatch({ type: types.END, payload: diff });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [initial, dispatch, inGame]);

  return { time };
}
