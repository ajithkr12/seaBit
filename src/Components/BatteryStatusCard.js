import React from 'react'
import { Box } from "@mui/material";
import battery from "../Assets/Images/battery.png"
import Battery100 from "../Assets/Images/Battery100.png";
import Battery50 from "../Assets/Images/Battery50.png"
import Battery20 from "../Assets/Images/Battery20.png"

import close from "../Assets/Images/close.png"
import {Color} from '../Assets/Constants/Color'

const BatteryStatusCard = (props) => {
  const {data} = props
  var batteryCharge =  data.batteryCharge;
  const {mainContainer}=BatterChargeCheck(batteryCharge);
  return (
    <Box style={mainContainer}>
      <Box style={styles.imageContainer}>
        {batteryCharge<=20 && <img src={Battery20} alt="logo" style={{ width: "24px" }} />}
        {batteryCharge > 20 && batteryCharge <=60 && <img src={Battery50} alt="logo" style={{ width: "24px" }} />}
        {batteryCharge > 60 && <img src={Battery100} alt="logo" style={{ width: "24px" }} />}
        <h6 style={{ margin: "0px", fontSize: "8px", lineHeight: "12px" }}>{data.batteryCharge} %</h6>
      </Box>
      <Box style={styles.tittleContainer}>
        <h4 style={{ margin: "0px", fontSize: "16px", lineHeight: "18px" }}>{data.deviceName}</h4>
        <h5 style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}> Today 10:30PM</h5>
      </Box>
      <img src={close} alt="logo" style={{ width: "14px", top: "15px", right: "15px", position: "absolute" }} />

    </Box>
  )
}

export default BatteryStatusCard;


export const BatterChargeCheck = (data) => {
  // var batteryCharge =  data.statusName;
  var batteryCharge =  data;
  var mainContainer = {};

  mainContainer.flexDirection= "row";
  mainContainer.display= "flex";
  mainContainer.padding="2% 0 2% 2%";
  mainContainer.maxWidth ="100%";
  mainContainer.borderRadius= "10px";
  mainContainer.position= "relative";
  mainContainer.marginTop ="12px";

  if (batteryCharge <= 20) {
    mainContainer.background =Color.bg_min;
    return { mainContainer };

  } else if (batteryCharge > 20 && batteryCharge <=60 ) {
    mainContainer.background =Color.bg_avg;
    return { mainContainer };
  }
  else if (batteryCharge > 60) {
    mainContainer.background =Color.bg_full;
    return { mainContainer };
}
  return { mainContainer };
};


const styles = {
  // mainContainer: {
  //   flexDirection: "row",
  //   display: "flex",
  //   padding: "2% 0 2% 2%",
  //   maxWidth: "100%",
  //   background: "#DBE5FF",
  //   borderRadius: "10px", 
  //   position: "relative",
  //   marginTop: "12px"


  // },
  imageContainer: {
    background: "unset",
    display: "flex", justifyContent: "center", alignItems: "center",
    flexDirection: "column",
    borderRadius: "6px"
  },
  tittleContainer: {
    marginLeft: "12px",
    flexDirection: "column",
    display: "flex",
    alignItems: "start"

  }

}