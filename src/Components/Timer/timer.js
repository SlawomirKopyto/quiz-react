import { useEffect, useState } from "react";

export default function Timer({  activeQuestion, selected }) {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) { 
        window.location.href = '';
      }
    }, 1000)

    return () => clearInterval(interval);
  },[ timer]);

  useEffect(() => {
    setTimer(120);
  }, [activeQuestion, selected]);

  return timer;
}