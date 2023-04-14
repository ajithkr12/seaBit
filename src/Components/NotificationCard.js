import React from 'react'
import { Box } from "@mui/material";
import {Color} from '../Assets/Constants/Color'

const NotificationCard = (props) => {
  const{data,dColor} = props
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "start",
      padding: "5% 4% 5% 4%",
      maxWidth: "100%",
      background: dColor,
      borderRadius: "10px",
      marginTop: "2%"
    },

  }
  return (
    <Box style={styles.mainContainer}>

      <h5 style={{ margin: "0px", fontSize: "14px", lineHeight: "14px" }}> {data.deviceName}</h5>
      <h5 style={{ margin: "0px", fontSize: "14px", lineHeight: "14px" }}> {data.location}</h5>

    </Box>
  )
}

export default NotificationCard