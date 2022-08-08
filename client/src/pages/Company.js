import React from "react";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
const Company = () => {
  return (
    <Header receiver="AMBASSADOR" message="Your Company">
      <form className="form">
        <TextField
          required
          type="text"
          label="Legal Name"
          variant="outlined"
        />
        <TextField
          required
          type="email"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          type="url"
          label="Website (if any)"
          variant="outlined"
        />
        <TextField
          required
          type="text"
          label="Country of Origin"
          variant="outlined"
        />
        <Button variant="contained" type="submit">Let's Go!</Button>
      </form>
    </Header>
  );
};

export default Company;
