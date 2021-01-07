import React from "react";
import "./style.css";

export default function App() {
  function clickMe() {
    let htmlCollection = document.getElementsByClassName("h1");
    let arr = [...htmlCollection];
    let ele = arr[arr.length - 1];
  }
  return (
    <>
      <div class="div">
        <h1 class="h1">Hello StackBlitz!</h1>
        <h1 class="h1">Start editing to see some magic happen :)</h1>
      </div>
      <button onClick={clickMe}>click</button>
    </>
  );
}
