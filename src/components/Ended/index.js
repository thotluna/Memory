import { useStore } from "hooks/useStore";
import React from "react";

import "./Ended.css";

export function Ended() {
  const { timeTotal } = useStore();
  return (
    <div className="ended">
      <div>
        <h1>Congratulation you are WON </h1>
        <h2>time: {timeTotal} seconds</h2>
      </div>
    </div>
  );
}
