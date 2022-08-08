import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AnimatedPage from "./AnimatedPage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const header = (props) => {
  return (
    <AnimatedPage>
      <header>
        <NavLink to="/start">
          <Button variant="text">
            <ArrowBackIosNewIcon fontSize="small" />
            Go Back
          </Button>
        </NavLink>
        <h1 className="branding">SalesUp</h1>
      </header>
      <div className="center_block uncentered">
        <img
            width="60rem"
          src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
          alt="SalesUp Logo depicting Growth of both Ventures and Influencers!"
        />
        <div className="welcome_text">
            <span className="sub_title">HELLO, DEAR {props.receiver}!</span>
            <h2 className="title">Tell Us A Little Bit About {props.message}</h2>
          </div>
          {props.children}
      </div>
    </AnimatedPage>
  );
};

export default header;
