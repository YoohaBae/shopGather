import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const ShowObject = ({ object }) => {
  console.log(object);
  return (
    <div style={{ height: "75%", width: "96%", paddingLeft: "10px" }}>
      <DataGrid
        rows={object}
        columns={[{ field: "name", width: 300 }, { field: "price" }]}
        checkboxSelection
        pageSize={10}
      />
    </div>
  );
};

const CheckList = () => {
  const [listOfObject, setListOfObject] = useState({
    subtotal: 93.62,
    tax: 1,
    total: 98.21,
    products: [
      {
        id: 1,
        name: "STKOBRLPLABL",
        price: 1.97,
      },
      {
        id: 2,
        name: "STKOBRLPLABL",
        price: 1.97,
      },
      {
        id: 3,
        name: "STKO SUNFLWR",
        price: 0.97,
      },
      {
        id: 4,
        name: "STKO SUNFLWR",
        price: 0.97,
      },
      {
        id: 5,
        name: "STKO SUNFLWR",
        price: 0.97,
      },
      {
        id: 6,
        name: "STKO SUNFLWR",
        price: 0.97,
      },
      {
        id: 7,
        name: "BLING BEADS",
        price: 0.97,
      },
      {
        id: 8,
        name: "GREAT VALUE",
        price: 9.97,
      },
      {
        id: 9,
        name: "LIPTON",
        price: 4.48,
      },
      {
        id: 10,
        name: "DRY DOG",
        price: 12,
      },
    ],
  });
  const [listOfPerson, setListOfPerson] = useState(
    JSON.parse(window.sessionStorage.getItem("people"))
  );
  const [count, setCount] = useState(
    JSON.parse(window.sessionStorage.getItem("count"))
  );

  useEffect(() => {
    console.log(listOfPerson);
    console.log(count);
    console.log(listOfObject);
  }, []);

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
              {JSON.parse(window.sessionStorage.getItem("people"))[count].name}
            </h2>
          </div>
        </div>
        <ShowObject object={listOfObject.products} />
        <Button size="large" sx={{ float: "right" }}>
          <Link to={`/selectImageType`} style={{ color: "inherit" }}>
            Next
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default CheckList;
