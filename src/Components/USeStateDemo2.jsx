import React, { useState } from "react";

export const UseStateDemo2 = () => {
  var count = 0;
  //create state variable...
  //[score] --> state variable
  //[setScore] -->setter function.. it use to update value of state variable.
  //useState(0) -->0 initial value of variable...
  const[score,setScore]=useState(0)

  const increseCount = () => {
    console.log("count = ", count);
    count++;
    console.log("after increse count =", count);
  };

  const increseScore = ()=>{
    //score++ dont do this
    //do with setter function
    setScore(score+1) // increse score value..
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO</h1>
      <h1>COUNT ={count}</h1>
      <h1>SCORE ={score}</h1>
      <button onClick={increseCount}>+</button>
      <button onClick={increseScore}>increse score</button>
    </div>
  );
};