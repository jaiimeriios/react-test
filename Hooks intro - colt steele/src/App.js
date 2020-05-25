import React from "react";
import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";

const items = [
  { id: 1, name: "Primer Item", price: 2.5, qty: 5 },
  { id: 2, name: "Segundo Item", price: 5.25, qty: 7 },
  { id: 3, name: "Tercer Item", price: 7.5, qty: 3 },
  { id: 4, name: "Cuarto Item", price: 8.5, qty: 6 },
];

function App() {
  return (
    <div className="app">
      <h1>React Hooks Intro</h1>
      <Cart initialItems={items} />
      <Navbar />
      <Greeter name="uno" age="30" excitement={10} />
      <Greeter name="dos" excitement={5} />
      <Counter />
      <Counter step={5} />
      <MoodToggler />
    </div>
  );
}

export default App;
