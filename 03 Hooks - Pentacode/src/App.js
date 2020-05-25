import React, { Component, useState, useEffect } from "react";
import logo from './logo.svg'
import "./App.css";

function App() {
    const [articulo, setArticulo] = useState([]);
    const [scrollDepth, setScrollDepth] = useState(0);

    function determineScrollDepth() {
        const scrolled =
            document.documentElement.scrollTop || document.body.scrollTop;
        setScrollDepth(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", determineScrollDepth);

        return function () {
            window.removeEventListener("scroll", determineScrollDepth);
        };
    });

    return (
        <div className="App">


            <h2 className="scroll">Scroll this far: {scrollDepth} px</h2>
            <hr />
            <p>Items: {articulo.toString()}</p>
            <button
                onClick={() => {
                    setArticulo([...articulo, "manzana"]);
                }}
            >
                mas 1
            </button>

            <div className="tall">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default App;
