import { Button, Tabs, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  const [selectedTab, setSelectedTab] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
            {person.name}
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default Result;
