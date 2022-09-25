import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CheckList = () => {
  const [listOfObject, setListOfObject] = useState([]);
  const [listOfPerson, setListOfPerson] = useState(
    JSON.parse(window.sessionStorage.getItem("people"))
  );
  const [count, setCount] = useState(
    JSON.parse(window.sessionStorage.getItem("count"))
  );

  useEffect(() => {
    console.log(listOfPerson);
    console.log(count);
  }, []);

  const showObject = ({ name, id, listOfObject, setListOfObject }) => {
    return (
      <FormGroup style={{ marginLeft: "50px" }}>
        <FormControlLabel control={<Checkbox />} label="Label" />
      </FormGroup>
    );
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

        <div
          style={{
            textAlign: "-webkit-center",
            display: "flex",
            alignItems: "center",
            marginLeft: "40px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <h2>
              Member #1:{" "}
              {JSON.parse(window.sessionStorage.getItem("people"))[0].name}
            </h2>
          </div>
        </div>
        {listOfObject.map((object) => (
          <showObject
            key={object.id}
            name={object.name}
            id={object.id}
            listOfObject={listOfObject}
            setListOfObject={setListOfObject}
          />
        ))}
      </Box>
    </div>
  );
};

export default CheckList;
