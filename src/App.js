import Home from "./pages/home";
import Javascript from "./pages/javascript";
import Css from "./pages/css";
import Html from "./pages/html";

import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/css" element={<Css />} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/html" element={<Html />} />
      <Route path="/*" element={<h1>Oops!!🥹</h1>}/>
    </Routes>
  );
};

export default App;
