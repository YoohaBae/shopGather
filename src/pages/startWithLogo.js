import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import UploadImage from "./uploadImage";

const StartWithLogo = () => {
  let [logopage, setLogopage] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLogopage(false);
    }, 1000);
  });

  return (
    <div>
      {logopage === true ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <img src="logo.png" alt="logo" width="350" height="350" />
        </Box>
      ) : (
        <UploadImage />
      )}
    </div>
  );
};

export default StartWithLogo;
