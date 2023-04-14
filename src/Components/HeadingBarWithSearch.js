import React from 'react'
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, } from "@mui/material";
import {Color} from '../Assets/Constants/Color'

const HeadingBarWithSearch = (props) => {
  const {heading,icon} = props;
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      // padding:"6% 0 6% 6%",
      maxWidth: "100%",
      background: Color.bg_secondary,


    },
    imageContainer: {
      background: Color.bg_tertiary,
      display: "flex", justifyContent: "center", alignItems: "center",
      padding: "2%",
      borderRadius: "6px"

    },
    tittleContainer: {
      marginLeft: "18px",
      flexDirection: "column",
      display: "flex", justifyContent: "start",
      alignItems: "start"

    },


  }
  return (
    <Box style={styles.mainContainer}>
      <Box style={styles.imageContainer}>
        <img src={icon} alt="logo" style={{ width: "38px" }} />
      </Box>
      <Box style={styles.tittleContainer}>
        <h4 style={{ margin: "0px", fontSize: "18px", lineHeight: "18px" }}>{heading}</h4>
        <TextField
          size="small"
          className="inputRounded"
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

    </Box>
  )
}

export default HeadingBarWithSearch