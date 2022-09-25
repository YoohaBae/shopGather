import React, { useState } from "react";
import Webcam from "react-webcam";
import { Button, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import { Link } from "react-router-dom";

const videoConstraints = {
  width: 0,
  height: 0,
  facingMode: "user",
};

const TakePhoto = () => {
  const [imgSrc, setImgSrc] = React.useState(null);
  const [isCaptured, setIsCaptured] = React.useState(false);

  const sendImage = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    axios
      .post(
        `http://127.0.0.1:8000/api/analyze/scan`,
        { buffer: imgSrc },
        config
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.sessionStorage.setItem("items", JSON.stringify(res.data));
      });
  };
  return (
    <div>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}>
        {({ getScreenshot }) => (
          <div>
            <IconButton
              color="primary"
              aria-label="take picture"
              component="label"
              onClick={() => {
                const imageSrc = getScreenshot();
                setImgSrc(imageSrc);
                setIsCaptured(true);
              }}>
              <PhotoCamera />
            </IconButton>
            {imgSrc && <img src={imgSrc} />}
          </div>
        )}
      </Webcam>
      {isCaptured && (
        <div
          style={{
            textAlign: "-webkit-center",
          }}>
          <Button
            variant="outlined"
            sx={{ width: "250px", marginBottom: "15px" }}
            onClick={sendImage}>
            <Link to={`/setPerson`} style={{ color: "inherit" }}>
              Submit
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
export default TakePhoto;
