import React from 'react'
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, } from "@mui/material";
import Dot from './Dot';
import {Color} from '../Assets/Constants/Color'
import ecgMonitor from "../Assets/Images/ecgMonitor.png";

const HeadingBarWithIcon = (props) => {
  const {heading,dColor,icon} = props;
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      padding: "4% 2% 4% 2%",
      maxWidth: "100%",
      background: Color.bg_secondary,
      position: "relative",
      borderBottom: "2px solid #000000"

    },
    tittleContainer: {
      flexDirection: "column",
      display: "flex", justifyContent: "center",
      alignItems: "start"

    },


  }
  return (
    <Box style={styles.mainContainer}>
      <Box style={styles.tittleContainer}>
        <div style={{display:'flex',flexDirection:'row',justifyContent: "center",alignItems:'center'}}>
        <img src={icon} alt="logo" style={{ width: "28px" ,marginRight:'6px'}} />
        <h4 style={{ margin: "0px", fontSize: "16px", lineHeight: "18px" }}>{heading}</h4>
        </div>

        <TextField
          size="small"
          className="inputRounded1"
          style={{
            backgroundColor: "#FFFFFF",
            border: `1px solid #ACD321 0.1`,
            width: "100%",
            marginTop: "10px",
          }}
          defaultValue=""
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Dot color={dColor}/>
    </Box>
  )
}

export default HeadingBarWithIcon