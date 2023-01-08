import React from "react";
import Home from "./module/home";
import About from "./module/about";
import Tail_Head from "./module/tail-head";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tail-head" element={<Tail_Head />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
