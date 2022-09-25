import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CheckList = () => {
  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <img
          src="logo_icon.png"
          alt="logo_icon"
          width="30"
          height="30"
          style={{ margin: "15px" }}
        />

        <div
          style={{
            textAlign: "-webkit-center",
            display: "flex",
            alignItems: "center",
            marginLeft: "40px",
          }}>
          <div style={{ marginRight: "10px" }}>
            <h2>Member #1: NAME</h2>
          </div>
        </div>
        <FormGroup style={{ marginLeft: "50px" }}>
          <FormControlLabel control={<Checkbox />} label="Label" />
        </FormGroup>
      </Box>
    </div>
  );
};

export default CheckList;
