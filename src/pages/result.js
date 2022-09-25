import { Button, Tabs, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const ShowObject = ({ object, person }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(object);
    console.log(person);
    let tempItems = [];
    for (let i = 0; i < person.object.length; i++) {
      tempItems.push(object[i]);
    }
    console.log(tempItems);
    setSelectedItems(tempItems);
  }, []);

  return (
    <div style={{ height: "75%", width: "96%", paddingLeft: "10px" }}>
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
      {...other}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div sx={{ height: "100vh" }}>
      <Box sx={{ height: "100vh" }}>
        <img
          src="logo_icon.png"
          alt="logo_icon"
          width="30"
          height="30"
          style={{ margin: "15px" }}
        />
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
          />
        ))}
      </Box>
    </div>
  );
};

export default Result;
