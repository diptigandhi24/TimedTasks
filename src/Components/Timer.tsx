import { useState, useEffect } from "react";

interface TimerProps {
  setTimerExpired: () => void;
}

export default function Timer({ setTimerExpired }: TimerProps) {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("print the counter", counter);
      if (counter > 0) setCounter(counter - 1);
      else {
        setTimerExpired();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [counter, setTimerExpired]);

  return <p style={{ color: "white" }}>Time Left : {counter} s</p>;
}
