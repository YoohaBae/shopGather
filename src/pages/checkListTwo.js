import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const ShowObject = ({ object, setSelectionModel, selectionModel }) => {
  return (
    <div style={{ height: "75%", width: "96%", paddingLeft: "10px" }}>
      <DataGrid
        rows={object}
        columns={[{ field: "name", width: 300 }, { field: "price" }]}
        checkboxSelection
        pageSize={10}
        onSelectionModelChange={(newSelectionModel) => {
          console.log(newSelectionModel);
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
};

const CheckListTwo = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [listOfObject, setListOfObject] = useState(
    JSON.parse(window.sessionStorage.getItem("items"))
  );
  const [listOfPerson, setListOfPerson] = useState(
    JSON.parse(window.sessionStorage.getItem("people"))
  );
  const [count, setCount] = useState(
    JSON.parse(window.sessionStorage.getItem("count"))
  );

  //   useEffect(() => {
  //     console.log(listOfPerson);
  //     console.log(count);
  //     console.log(listOfObject);
  //   }, []);

  const handleClickNext = () => {
    var temp = listOfPerson;
    temp[count].object = selectionModel;
    window.sessionStorage.setItem("people", JSON.stringify(temp));
    window.sessionStorage.setItem("count", count + 1);
  };

  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Link to={`/`}>
          <img
            src="logo_icon.png"
            alt="logo_icon"
            width="30"
            height="30"
            style={{ margin: "15px" }}
          />
        </Link>

        <div
          style={{
            textAlign: "-webkit-center",
            display: "flex",
            alignItems: "center",
            marginLeft: "40px",
          }}>
          <div style={{ marginRight: "10px" }}>
            <h2>
              Member #{count + 1}:{" "}
              {JSON.parse(window.sessionStorage.getItem("people"))[count].name}
            </h2>
          </div>
        </div>
        <ShowObject
          object={listOfObject.products}
          setSelectionModel={setSelectionModel}
          selectionModel={selectionModel}
        />
        <Button size="large" sx={{ float: "right" }} onClick={handleClickNext}>
          {count === listOfPerson.length - 1 ? (
            <Link to={`/result`} style={{ color: "inherit" }}>
              Complete
            </Link>
          ) : (
            <Link to={`/checkList`} style={{ color: "inherit" }}>
              Next
            </Link>
          )}
        </Button>
      </Box>
    </div>
  );
};

export default CheckListTwo;
