import { stateInGame, types } from "types";
import { useStore } from "hooks/useStore";
import { useDispatch } from "hooks/useDispatch";
import useTimeGame from "hooks/useTimeGame";

import Score from "components/Score";

import "./Printer.css";

export default function Printer() {
  const { assert, tried, inGame, date, timeTotal } = useStore();
  const dispatch = useDispatch();

  useTimeGame({ initial: date });

  return (
    <>
      {inGame === stateInGame.PLAY && (
        <div className="Printer__content">
          <Score number={assert} title="Assert" />
          <Score number={tried} title="Tried" />
          <Score number={timeTotal} title="Time" />
        </div>
      )}
      {inGame === stateInGame.WAITTING && (
        <button
          onClick={() =>
            dispatch({
              type: types.INITIAL,
              payload: { date: new Date() },
            })
          }
        >
          Play
        </button>
      )}
    </>
  );
}
