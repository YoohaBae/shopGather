import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const EnterName = ({ name, id, listOfPerson, setListOfPerson }) => {
  const handleChange = (e) => {
    let items = [...listOfPerson];
    let item = items.filter((person) => person.id === id)[0];
    item.name = e.target.value;
    setListOfPerson(items);
    console.log(listOfPerson);
  };

  return (
    <div
      style={{
        textAlign: "-webkit-center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div style={{ marginRight: "10px" }}>Member #{id}</div>
      <TextField
        id="outlined-basic"
        label="Name/Nicname"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

const UploadImage = () => {
  const [countOfPerson, setCountOfPerson] = useState(1);
  const [listOfPerson, setListOfPerson] = useState([
    { id: 1, name: "", object: [] },
  ]);

  const plusNumberofPerson = () => {
    var newPerson = {
      id: countOfPerson + 1,
      name: "",
      object: [],
    };
    setListOfPerson([...listOfPerson, newPerson]);
    setCountOfPerson(countOfPerson + 1);
    // console.log(countOfPerson);
  };

  const minusNumberofPerson = () => {
    if (countOfPerson != 0) {
      setCountOfPerson(countOfPerson - 1);
      // console.log(countOfPerson);
      var tempPerson = listOfPerson;
      tempPerson.splice(countOfPerson - 1, 1);
      setListOfPerson(tempPerson);
    }
  };

  const handleClickNext = () => {
    window.sessionStorage.setItem("people", JSON.stringify(listOfPerson));
    window.sessionStorage.setItem("count", 0);
  };

  return (
    <div>
      <Box>
        <img
          src="logo_icon.png"
          alt="logo_icon"
          width="30"
          height="30"
          style={{ margin: "15px" }}
        />

        <div style={{ textAlign: "-webkit-center" }}>
          <h1>Number of people</h1>
        </div>
        <div
          style={{
            textAlign: "-webkit-center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="delete"
            style={{ marginTop: "8px", marginRight: "20px" }}
            onClick={minusNumberofPerson}
          >
            <RemoveIcon />
          </IconButton>
          <div>{countOfPerson}</div>
          <IconButton
            aria-label="add"
            style={{ marginTop: "8px", marginLeft: "20px" }}
            onClick={plusNumberofPerson}
          >
            <AddIcon />
          </IconButton>
        </div>
        {listOfPerson.map((person) => (
          <EnterName
            key={person.id}
            name={person.name}
            id={person.id}
            listOfPerson={listOfPerson}
            setListOfPerson={setListOfPerson}
          />
        ))}
        <Button size="large" sx={{ float: "right" }} onClick={handleClickNext}>
          <Link to={`/checkList`} style={{ color: "inherit" }}>
            Next
          </Link>
        </Button>
      </Box>
    </div>
  );
};
export default UploadImage;
