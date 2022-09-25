import { Button, Tabs, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

const ShowObject = ({ object, person, listOfObject }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(object);
    console.log(person);
    let tempItems = [];
    let tempTotal = 0;
    for (let i = 0; i < person.object.length; i++) {
      tempItems.push(object[person.object[i]]);
      tempTotal += object[person.object[i]].price;
    }
    console.log(tempItems);
    console.log(tempTotal * listOfObject.tax * 0.01);
    console.log(total);
    setSelectedItems(tempItems);
    setTotal((tempTotal + tempTotal * listOfObject.tax * 0.01).toFixed(2));
  }, []);

  return (
    <>
      <h2
        style={{ marginLeft: "15px", marginBottom: "5px", paddingTop: "15px" }}
      >
        Member #{person.id}:{" "}
        {
          JSON.parse(window.sessionStorage.getItem("people"))[person.id - 1]
            .name
        }
      </h2>
      <div
        style={{
          height: "40%",
          width: "96%",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBotton: "40px",
        }}
      >
        {/* <div style={{ marginRight: "10px" }}> */}

        {/* </div> */}
        <DataGrid
          rows={selectedItems}
          columns={[
            { field: "name", width: 300, editable: true },
            { field: "price", editable: true },
          ]}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
      <h3
        style={{
          float: "right",
          marginTop: "5px",
          paddingTop: "0px",
          marginBottom: "20px",
          marginRight: "12px",
        }}
      >
        Total (including Tax): {total}
      </h3>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Result = () => {
  const [listOfObject, setListOfObject] = useState(
    JSON.parse(window.sessionStorage.getItem("items"))
  );
  const [listOfPerson, setListOfPerson] = useState(
    JSON.parse(window.sessionStorage.getItem("people"))
  );
  const [value, setValue] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div sx={{ height: "100vh" }}>
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
        {/* <Box sx={{ height: "100%", borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="basic tabs example">
            {listOfPerson.map((person) => (
              <Tab label={person.name} key={person.id} />
            ))}
          </Tabs>
        </Box>
        {listOfPerson.map((person) => (
          <TabPanel value={value} index={person.id} key={person.id}>
            <ShowObject object={listOfObject.products} person={person} />
          </TabPanel>
        ))} */}
        {listOfPerson.map((person) => (
          <ShowObject
            object={listOfObject.products}
            person={person}
            key={person.id}
            listOfObject={listOfObject}
          />
        ))}
      </Box>
    </div>
  );
};

export default Result;
