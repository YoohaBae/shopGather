import {
    IconButton
  } from "@mui/material";
    import {
    Button
  } from "@mui/material";
import { Box } from "@mui/system";
import { render } from "@testing-library/react";
import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { TextField } from '@mui/material';


const UploadImage = () => {
  const [countOfPerson, setCountOfPerson] = useState(1);
  const [listOfPerson, setListOfPerson] = useState([{id:1, name:""}])

  const plusNumberofPerson =()=>{
    setCountOfPerson(countOfPerson+1);
    console.log(countOfPerson);
  }

  const minusNumberofPerson =()=>{
    if(countOfPerson!=0){
      setCountOfPerson(countOfPerson-1);
      console.log(countOfPerson);
    }
  }

  
  return(
    <div>
      <Box>
      <img
                src="logo_icon.png"
                alt="logo_icon"
                width="30"
                height="30"
                style={{margin: "15px"}}
            />

        <div style={{textAlign:"-webkit-center"}}>
        <h1>Number of people</h1>
      </div>
      <div style={{textAlign:"-webkit-center", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <IconButton aria-label="delete" style={{marginTop:"8px", marginRight:"20px"}} onClick={minusNumberofPerson}>
          <RemoveIcon/>
        </IconButton>
        <div>{countOfPerson}</div>
        <IconButton aria-label="add" style={{marginTop:"8px", marginLeft:"20px"}} onClick={plusNumberofPerson}>
          <AddIcon/>
        </IconButton>
      </div>

      <div>{
        }

      </div>

      <div style={{textAlign:"-webkit-center", display:"flex", alignItems:"center", justifyContent:"center", marginTop:"30px"}}>
      <div style={{marginRight:"10px"}}>Member #</div>
      <TextField id="outlined-basic" label="Name/Nicname" variant="outlined" />
      </div>

      </Box>
    </div>
  );
};
export default UploadImage;