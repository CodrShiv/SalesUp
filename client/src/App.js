import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Company from "./pages/Company";
import Influencer from "./pages/Influencer";
const App = () => {
  return (
    <div>
      <div className="gradient gradient_anim">
        <Router>
            <Routes>
              <Route path="/start" exact element={<Start />} />
              <Route path="/start/influencer" exact element={<Influencer />} />
              <Route path="/start/company" exact element={<Company />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
