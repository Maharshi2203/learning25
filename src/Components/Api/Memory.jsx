import React, { useState, useEffect } from "react";

function Memory() {

  const [showNumbers, setShowNumbers] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([]);

  const generateRandomNumbers = () => {
    let randomNums = [];
    for (let i = 0; i < 6; i++) {
      randomNums.push(Math.floor(Math.random() * 10).toString());
    }
    return randomNums;
  };

  const startGame = () => {

    const randomNums = generateRandomNumbers();
    setNumbers(randomNums);

    setGameStarted(true);
    setShowNumbers(true);
    setInput("");
    setResult("");
  };

  useEffect(() => {
    if (showNumbers) {
      const timer = setTimeout(() => {
        setShowNumbers(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showNumbers]);

  const checkAnswer = () => {

    if (input === numbers.join("")) {

      setResult("Correct Number");

      setTimeout(() => {
        setGameStarted(false);
        setShowNumbers(false);
        setInput("");
        setResult("");
      }, 1000);

    } else {

      setResult("Incorrect Try Again");
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h2>Memory Game</h2>

      {!gameStarted && (
        <button onClick={startGame}>Start Game</button>
      )}

      {showNumbers && (
        <h3 style={{ fontSize: "30px", letterSpacing: "10px" }}>
          {numbers.join(" ")}
        </h3>
      )}

      {!showNumbers && gameStarted && (
        <div>
          <input
            type="text"
            maxLength={6}
            placeholder="Enter the number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <br /><br />

          <button onClick={checkAnswer}>Submit</button>
        </div>
      )}

      {result && <h3>{result}</h3>}

    </div>
  );
}

export default Memory;