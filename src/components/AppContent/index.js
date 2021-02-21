import Initial from "components/Initial";
import Printer from "components/Printer";
import { useStore } from "hooks/useStore";
import React from "react";

import { stateInGame } from "types";
import { Board } from "../Board";
import { Ended } from "../Ended";

import "./AppContent.css";

export function AppComponent() {
  const { inGame } = useStore();
  return (
    <>
      {inGame === stateInGame.WAITTING && (
        <div className="App__content--center">
          <Initial />
        </div>
      )}
      {inGame === stateInGame.PLAY && (
        <div className="App__content">
          <Printer />
          <Board />
        </div>
      )}
      {inGame === stateInGame.WON && (
        <div className="App__content--center">
          <Ended />
        </div>
      )}
    </>
  );
}
