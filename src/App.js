import React from "react";
import "./App.css";
import Stars from "./components/Stars.js";

export default function App() {
  return (
      <div>
        <Stars count={5} />
      </div>
  );
}