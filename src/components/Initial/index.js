import { types } from "types";
import { useDispatch } from "hooks/useDispatch";
import { useStore } from "hooks/useStore";

import "./Initial.css";
import { useEffect, useState } from "react";

export default function Initial() {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const { nDecks } = useStore();

  useEffect(() => {
    console.log({ nDecks });
    if (nDecks >= 1 && nDecks <= 10) {
      setErr(false);
    } else {
      if (!nDecks) return;
      console.log(
        `${nDecks} >= 10 : ${nDecks <= 10}`,
        `${nDecks} >= 1 : ${nDecks >= 1}`
      );
      setErr(true);
    }
  }, [nDecks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    nDecks > 1 && nDecks < 10 && setErr(true);
    dispatch({
      type: types.INITIAL,
      payload: {
        date: new Date(),
      },
    });
  };

  const handleChange = (e) => {
    console.log("change");
    if (Number(+e.target.value)) {
      dispatch({
        type: types.SETTER,
        payload: {
          nDecks: +e.target.value,
        },
      });
    }
  };

  return (
    <div className="initial__container">
      <form className="initial__form" onSubmit={handleSubmit}>
        <h2>Play the Memory</h2>
        <div className="input-box">
          <input
            type="text"
            min="1"
            max="10"
            placeholder="Configure the number of pairs "
            onChange={handleChange}
            value={nDecks}
          />
          {err && (
            <small className="input-box--error">
              Enter a number between 1 and 10{" "}
            </small>
          )}
        </div>
        <div className="input-box">
          <input
            disabled={(!nDecks || err) && "disabled"}
            type="submit"
            value="Play"
          />
        </div>
      </form>
    </div>
  );
}
