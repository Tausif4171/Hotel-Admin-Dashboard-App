import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Create from "./components/Create";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      {/* <h2 style={{ color: "orange" }}>Hotel App</h2> */}
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path="/create" element={<Create />} />
        <Route path="/hotels/:id" element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
