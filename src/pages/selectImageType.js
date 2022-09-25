import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SelectImageType = () => {
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ height: "90%" }}
        >
          <Button
            variant="outlined"
            sx={{ width: "50px", marginBottom: "15px" }}
          >
            <Link to={`/setPerson`} style={{ color: "inherit" }}>
              Photo
            </Link>
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "50px", marginBottom: "15px" }}
          >
            <Link to={`/setPerson`} style={{ color: "inherit" }}>
              Scan
            </Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SelectImageType;
