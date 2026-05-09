import React from 'react'



export const UseStateDemo = () => {
  var count = 0;

  //userDefine function..
  const increseCount = ()=>{
    alert("increse count called...")
  }
  const decreseCount  =(x)=>{
    alert("decrese count called.. "+x)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        <h2>Count :{count}</h2>
        <button onClick={increseCount}>increse</button>
        <button onClick={decreseCount}>DECRESE</button>
        <button onClick={()=>{decreseCount(100)}}>DECRESE 2</button>
    </div>
  )
}