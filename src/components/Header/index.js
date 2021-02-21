import { useEffect, useState } from "react";

import "./Header.css";

export function Header() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(
        new Intl.DateTimeFormat("es-Es", {
          dateStyle: "long",
          timeStyle: "medium",
        }).format(date)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime]);
  return (
    <>
      <div className="header">
        <h1>MEMORY</h1>
        <strong>{time}</strong>
      </div>
    </>
  );
}
