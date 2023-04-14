import React from 'react'
import { Box } from "@mui/material";
import {Color} from '../Assets/Constants/Color'

const HeadingBar = (props) => {
  const {heading,icon} =props;
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      maxWidth: "100%",
    },
    imageContainer: {
      background: Color.bg_tertiary,
      display: "flex", justifyContent: "center", alignItems: "center",
      padding: "1.5%",
      borderRadius: "6px"

    },
    tittleContainer: {
      marginLeft: "18px",
      flexDirection: "column",
      display: "flex", justifyContent: "center",
      alignItems: "start"

    }

  }
  return (
    <Box style={styles.mainContainer}>
      <Box style={styles.imageContainer}>
        <img src={icon} alt="logo" style={{ width: "30px" }} />
      </Box>
      <Box style={styles.tittleContainer}>
        <h4 style={{ margin: "0px", fontSize: "18px", lineHeight: "18px" }}>{heading}</h4>
      </Box>

    </Box>
  )
}

export default HeadingBar