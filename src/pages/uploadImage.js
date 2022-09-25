
  import {
    Button
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, {useState} from "react";
  import { Link } from "react-router-dom";

  
  const UploadImage = () => {
    const [extension, setExtension] = useState("");

    const handleImage = (e) => {
        console.log(e.target.value);
        setExtension(e.target.value);
    }

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
                sx={{height:"85%"}}
            >
                <Button variant="outlined" sx={{width: "250px", marginBottom: "15px"}}>Take Photo of Receipt</Button>
                <Button variant="contained" component="label" sx={{width: "250px"}}>
                    Upload Reciept
                    <input hidden accept="image/*" type="file" onChange={handleImage}/>
                </Button>
                <div style={{marginTop: "5px"}}>{extension}</div>
            </Box>
            {extension && (extension.includes("png") || extension.includes("jpg") || extension.includes("jpeg")) ? 
                (<div style={{width: "100%", justifyContent: "right"}}>
                    <Button 
                    size="large"
                    sx={{float: "right"}}
                    ><Link to={`/selectImageType`} style={{ color: "inherit" }}>
                        Next
                    </Link></Button>
                </div>)
                :
                (<div style={{width: "100%", justifyContent: "right"}}>
                    <Button 
                    size="large"
                    sx={{float: "right"}}
                    ><Link to={`/setPerson`} style={{ color: "inherit" }}>
                        Next
                    </Link></Button>
                </div>)
            }
        </Box>
        
      </div>
    );
  };
  
  export default UploadImage;

