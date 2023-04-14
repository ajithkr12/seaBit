import React from 'react'
import { Box } from "@mui/material";
import success from "../Assets/Images/success.png"
import error from "../Assets/Images/error.png"
import alert from "../Assets/Images/alert.png"
import close from "../Assets/Images/close.png"
import {Color} from '../Assets/Constants/Color'

const NotificationCardWithIcon = (props) => {
  const {data} = props;
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      padding: "4% 0 4% 4%",
      maxWidth: "100%",
      background: Color.bg_tertiary,
      borderRadius: "14px", position: "relative",
      marginTop: "5%"


    },
    imageContainer: {

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
      <Box>
        {data.notificationType=="SUCCESSFULLY" && <img src={success} alt="logo" style={{ width: "20px" }} />}
        {data.notificationType=="ALERT" && <img src={alert} alt="logo" style={{ width: "20px" }} />}
        {data.notificationType=="ERROR" && <img src={error} alt="logo" style={{ width: "20px" }} />}
        </Box>
      <Box style={styles.tittleContainer}>
        <h4 style={{ margin: "0px", fontSize: "16px", lineHeight: "18px",textTransform: "capitalize" }}> {data.notificationType}</h4>
        <h5 style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}> Today 10:30PM</h5>
      </Box>
      <img src={close} alt="logo" style={{ width: "14px", top: "15px", right: "15px", position: "absolute" }} />

    </Box>
  )
}

export default NotificationCardWithIcon