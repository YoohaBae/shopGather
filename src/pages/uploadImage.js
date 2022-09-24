
  import {
    Button
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, {useState} from "react";
//   import { Link } from "react-router-dom";
  
  const UploadImage = () => {
    const [uploaded, setUploaded] = useState(false);

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
                <Button variant="outlined" sx={{width: "250px", marginBottom: "15px"}}>Take Photo of Receipt</Button>
                <Button variant="contained" component="label" sx={{width: "250px"}}>
                    Upload Reciept
                    <input hidden accept="image/*" multiple type="file" />

                </Button>
            </Box>
        </Box>
        
      </div>
    );
  };
  
  export default UploadImage;
  