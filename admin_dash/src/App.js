// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
