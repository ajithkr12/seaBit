import React from 'react'
import { Box } from "@mui/material";

import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
const MainAlertCard = (props) => {
  const { devices,setDevices,notifications,setNotifications } =useContext(ContextConsumer);
  const {data} = props;
  console.log('data>>.',data)
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      padding: "1% 0 1% 1%",
      maxWidth: "100%",
      background: "#DBE5FF",
      borderRadius: "8px", position: "relative",
      marginTop: "1%"
    },
    imageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent:'center'
    },
    tittleContainer: {
      marginLeft: "18px",
      flexDirection: "column",
      display: "flex",
      alignItems: "start"
    }
  }
  return (
    <Box style={styles.mainContainer}>
      {/* <Box style={styles.imageContainer}>
        <img src={icon} alt="logo" style={{ width: "34px" }} />
      </Box> */}
      <Box style={styles.tittleContainer}>
        {/* <h4 style={{ margin: "0px", fontSize: "16px", lineHeight: "28px",textTransform: "capitalize" }}>{title}</h4> */}
        <div >
        <h5 style={{ margin: "0px", fontSize: "12px", lineHeight: "20px" }}>{data.deviceName}</h5> 
        {/* <VerticalLine/> */}
        <h5 style={{ margin: "0px", fontSize: "12px", lineHeight: "26px" }}> Location : {data.location}</h5>
        </div>


      </Box>
      {/* <img src={close} alt="logo" style={{ width: "14px", top: "15px", right: "15px", position: "absolute" }} /> */}

    </Box>
  )
}

export default MainAlertCard;


