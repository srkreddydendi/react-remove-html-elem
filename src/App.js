import React from "react";
import "./style.css";

export default function App() {
  function clickMe() {
    let htmlCollection = document.getElementsByClassName("h1");
    let arr = [...htmlCollection];
    let ele = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].remove();
    }
  }
  return (
    <>
      <div class="div">
        <h1 class="h1">Hello StackBlitz!</h1>
        <h1 class="h1">Start editing to see some magic happen 1</h1>
        <h1 class="h1">Start editing to see some magic happen 2</h1>
        <h1 class="h1">Start editing to see some magic happen 3</h1>
        <h1 class="h1">Start editing to see some magic happen 4</h1>
      </div>
      <button onClick={clickMe}>click</button>
    </>
  );
}
