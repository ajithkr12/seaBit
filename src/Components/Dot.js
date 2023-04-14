import React from 'react'
import { Box } from "@mui/material";

const Dot = (props) => {
  const {color} = props
  const styles = {
    mainContainer: {
      background: color,
      top: "15px", right: "15px", position: "absolute",
      width: '10px',
      height: "10px",
      borderRadius: '50%'

    },
  }
  return (
    <Box style={styles.mainContainer}>
    </Box>
  )
}

export default Dot