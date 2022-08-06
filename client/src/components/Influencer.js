import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import Button from "@mui/material/Button";
const Influencer = () => {
  return (
    <AnimatedPage>
      <div className="center_block">
        <NavLink to="/start">
          <Button variant="text">Go Back</Button>
        </NavLink>
        <h1>Influencer</h1>
      </div>
    </AnimatedPage>
  );
};

export default Influencer;
