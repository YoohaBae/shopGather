
  import {
    Button
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  
  const SelectImageType = () => {
    return (
      <div>
        <Box
         sx={{height:"100vh"}}
        >
            <img
                src="logo_icon.png"
                alt="logo_icon"
                width="30"
                height="30"
                style={{margin: "15px"}}
            />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{height:"90%"}}
            >
                <Button variant="outlined" sx={{width: "50px", marginBottom: "15px"}}>Photo</Button>
                <Button variant="outlined" sx={{width: "50px", marginBottom: "15px"}}>Scan</Button>
                
            </Box>
        </Box>
        
      </div>
    );
  };
  
  export default SelectImageType;
  