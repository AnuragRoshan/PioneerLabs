import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charts from "./Pages/Graph/Chart";
import Nav from "./Components/nav";
import Crypto from "./Pages/Crypto/Crypto";
import About from "./Pages/About/About";
import Metamask from "./Pages/Metamask/Metamask";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/chart" element={<Charts />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/about" element={<About />} />
          <Route path="/metaConn" element={<Metamask />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
