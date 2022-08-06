import React from "react";
import AnimatedPage from "./AnimatedPage";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const Start = () => {
  return (
    <AnimatedPage>
      <div className='center_block'>
      <div className="branding_container">
        <h1 className="branding">SalesUp</h1>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
          alt="SalesUp Logo depicting Growth of both Ventures and Influencers!"
        />
      </div>
      <main>
        <div className="welcome_text">
          <span className="sub_title">KNOCK KNOCK</span>
          <h2 className="title">Who's There?</h2>
        </div>
        <div className="opt_group">
          <NavLink to="/start/influencer">
            <Button variant="outlined" size="medium">
              Influencer
            </Button>
          </NavLink>
          <span className="opt_or">OR</span>
          <NavLink to="/start/company">
            <Button variant="outlined" size="medium">
              Company
            </Button>
          </NavLink>
        </div>
      </main>
      </div>
    </AnimatedPage>
  );
};

export default Start;
