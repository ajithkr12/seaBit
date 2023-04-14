import React from 'react'
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, } from "@mui/material";
import Dot from './Dot';
import {Color} from '../Assets/Constants/Color'

const HeadingBarWithIndicator = (props) => {
  const {heading,dColor} = props;
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
        <h4 style={{ margin: "0px", fontSize: "18px", lineHeight: "18px" }}>{heading}</h4>
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

export default HeadingBarWithIndicator