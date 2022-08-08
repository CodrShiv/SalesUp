import React from "react";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
const Influencer = () => {
  return (
    <>
      <Header receiver="INFLUENCER" message="Yourself" >
        <form className="form">
          <TextField type="text" required label="What should we call you?" variant="outlined" />
          <TextField type="email" required label="Your Email" variant="outlined" />
          <TextField type="text" required label="Native Language" variant="outlined" />
          <TextField type="text" required label="Where do you currently Live?" variant="outlined" />
          <Button type="submit" variant="contained">
            Let's Go!
          </Button>
        </form>
      </Header>
    </>
  );
};

export default Influencer;
