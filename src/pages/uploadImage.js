import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UploadImage = () => {
  const [extension, setExtension] = useState("");

  const [base64code, setBase64code] = useState("");
  const handleImage = (e) => {
    setExtension(e.target.value);
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const onLoad = async (fileString) => {
    // const body = { buffer: base64code };
    axios
      .post(
        `http://127.0.0.1:8000/analyze/scan`,
        { buffer: fileString },
        config
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.sessionStorage.setItem("items", JSON.stringify(res.data));
      });
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

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
          sx={{ height: "85%" }}
        >
          <Button
            variant="outlined"
            sx={{ width: "250px", marginBottom: "15px" }}
          >
            Take Photo of Receipt
          </Button>
          <Button variant="contained" component="label" sx={{ width: "250px" }}>
            Upload Reciept
            <input hidden accept="image/*" type="file" onChange={handleImage} />
          </Button>
          <div style={{ marginTop: "5px" }}>{extension}</div>
        </Box>
        {extension && (
          <div style={{ width: "100%", justifyContent: "right" }}>
            <Button size="large" sx={{ float: "right" }}>
              <Link to={`/setPerson`} style={{ color: "inherit" }}>
                Next
              </Link>
            </Button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default UploadImage;
