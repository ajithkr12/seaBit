import React from 'react'
import { Grid} from "@mui/material";
import Attendance from "../layouts/Attendance";
import Notification from '../layouts/Notification';
import DeviceChargeStatus from '../layouts/DeviceChargeStatus';
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import smartwatch from "../Assets/Images/smartwatch.png"
import beacon from "../Assets/Images/beacon.png";
import {Color} from '../Assets/Constants/Color'

const DashBoard = () => {
  const {  devices,setDevices,notifications,setNotifications } =useContext(ContextConsumer);

  const styles = {
    areaContainer: {
      background: Color.bg_primary, 
      borderRadius: "6px"

    },
  }
  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: 'start', height:"100vh" }}>
      <Grid md={5} style={styles.areaContainer}>
        <Grid md={12} style={{ padding: "10px", background: "#FFFFFF", borderRadius: "6px" ,height:"35vh" }}>
          <Attendance />
        </Grid>
        <Grid md={12} style={{ marginTop: "20px", padding: "10px", background: "#FFFFFF", borderRadius: "6px",height:"50vh" }}>
          <Notification />
        </Grid>
      </Grid>

      <Grid md={1}>
      </Grid>
      <Grid md={5} style={styles.areaContainer}>
        <Grid md={12} style={{ padding: "10px", background: "#FFFFFF", borderRadius: "6px" }}>
          <DeviceChargeStatus heading={"Wearables"} sortValue={"WEARABLES"} icon={smartwatch}/>
        </Grid>
        <Grid md={12} style={{ padding: "10px", background: "#FFFFFF", borderRadius: "6px" }}>
          <DeviceChargeStatus heading={"Beacons"} sortValue={"BEACONS"} icon={beacon}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashBoard