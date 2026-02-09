import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);    
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isPaused]);

  const startHandler = () => {
    setTime(0);
    setIsRunning(true);
    setIsPaused(false);
  };

  const stopHandler = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
  };

  const pauseHandler = () => {
    setIsPaused(true);
  };
  const resumeHandler = () => {
    setIsPaused(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>⏱️ Stopwatch</h2>
      <h1>{time} seconds</h1>
      <div style={{ marginTop: "20px" }}>
        <button onClick={startHandler}>Start</button>{" "}
        <button onClick={pauseHandler} disabled={!isRunning || isPaused}>
          Pause
        </button>{" "}
        <button onClick={resumeHandler} disabled={!isPaused}>
          Resume
        </button>{" "}
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default Stopwatch;
