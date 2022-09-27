import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";

const ShowObject = ({ object, setSelectionModel, selectionModel }) => {
  return (
    <div style={{ height: "75%", width: "96%", paddingLeft: "10px" }}>
      <DataGrid
        editMode="row"
        rows={object}
        columns={[
          { field: "name", width: 300, editable: true },
          { field: "price", editable: true },
        ]}
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
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(window.sessionStorage.getItem("selected"))
  );

  const handleClickNext = () => {
    var tempSelected = selectedItems;
    selectionModel.map((selection) => {
      tempSelected.push(selection);
    });
    console.log(tempSelected);
    window.sessionStorage.setItem("selected", JSON.stringify(tempSelected));
    if (count === listOfPerson.length - 1) {
      const result = {};
      tempSelected.forEach((x) => {
        result[x] = (result[x] || 0) + 1;
      });
      console.log(result);
      window.sessionStorage.setItem("overlapped", JSON.stringify(result));
    }
    var temp = listOfPerson;
    temp[count].object = selectionModel;
    window.sessionStorage.setItem("people", JSON.stringify(temp));
    window.sessionStorage.setItem("count", count + 1);
  };

  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Grid container spacing={3}>
          <Grid>
            <Link to={`/`}>
              <img
                src="logo_icon.png"
                alt="logo_icon"
                width="30"
                height="30"
                style={{ marginLeft: "15px", marginTop: "15px" }}
              />
            </Link>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <h3>ShopGather</h3>
          </Grid>
        </Grid>

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
