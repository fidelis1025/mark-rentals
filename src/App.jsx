import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Properties from "./pages/propertiespage";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/properties" element={<Properties/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
