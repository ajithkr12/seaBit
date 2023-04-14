import React from 'react'
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";

import { Grid } from "@mui/material";
import AlarmArea from "../layouts/AlarmArea";
import AlarmAreaPublicAddress from "../layouts/AlarmAreaPublicAddress";

import {Color} from '../Assets/Constants/Color'

import {devices,publicHistory} from '../layouts/data';
import ecgMonitor from "../Assets/Images/ecgMonitor.png";
import noBattery from "../Assets/Images/noBattery.png";
import noSignal from "../Assets/Images/noSignal.png";
import speaker from "../Assets/Images/speaker.png";

const Alarms = () => {

  const styles = {
    areaContainer: {
      padding: "12px 8px", 
      background: Color.bg_secondary, 
      borderRadius: "6px",

    },
  }
  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: 'start',}}>

<Grid md={12} 
      style={{
        margin:"0px 0px 6px 0px"
      }}
      >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Start Date "
          inputFormat="MM/DD/YYYY"
          // value={startDate}
          // onChange={(newDate) => {
          //   setStartDate(newDate._d);
          // }}
          renderInput={(params) => <TextField {...params} 
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderRadius:"8px",
                                            padding:"0px 12px"
                                          },
                                        }
                                      }}
                                      style={{width:"140px",fontSize:"14px",}}
                                      size="small"
                                    />}
        />
      </LocalizationProvider>
        <>{"   -   "}</>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Start Date "
            // inputFormat="MM/DD/YYYY"
            // value={new Date()}
            // onChange={(newDate) => {
            //   setStartDate(newDate._d);
            // }}
            renderInput={(params) => (
              <TextField
              size="small"
              {...params}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "8px",
                      // padding: "0px 12px",
                    },
                  },
                }}
                style={{ width: "400px",}}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>


      <Grid md={3} style={{padding:'4px',margin:'0px',}}>
        <Grid style={styles.areaContainer}>
          <AlarmArea data={devices} heading={'Battery charges'} icon={noBattery}/>
 
        </Grid>
      </Grid>

      <Grid md={3} style={{padding:'4px',margin:'0px'}}>
        <Grid style={styles.areaContainer}>
          <AlarmArea data={devices} heading={'Signal Lost'} icon={noSignal}/>
        </Grid>
      </Grid>

      <Grid md={3} style={{padding:'4px',margin:'0px'}}>
        <Grid style={styles.areaContainer}>
          <AlarmArea data={devices} heading={'Health History'} icon={ecgMonitor}/>
        </Grid>
      </Grid>

      <Grid md={3} style={{padding:'4px',margin:'0px'}}>
        <Grid style={styles.areaContainer}>
          <AlarmAreaPublicAddress data={publicHistory} heading={'Public History'} icon={speaker}/>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Alarms




















// import React from 'react'
// import { Grid} from "@mui/material";
// import Attendance from "../layouts/Attendance";
// import Notification from '../layouts/Notification';
// import DeviceChargeStatus from '../layouts/DeviceChargeStatus';
// import { ContextConsumer } from "../Utils/Context";
// import { useContext } from "react";
// import HeadingBar from "../Components/HeadingBar";
// import MainAlertCard from '../Components/MainAlertCard';
// import bell from "../Assets/Images/bell.png";

// import ecgMonitor from "../Assets/Images/ecgMonitor.png";
// import noBattery from "../Assets/Images/noBattery.png";
// import noSignal from "../Assets/Images/noSignal.png";
// import {Color} from '../Assets/Constants/Color'
// import {devices} from '../layouts/data'


// const Alarms = () => {
//   const { setDevices,notifications,setNotifications } =useContext(ContextConsumer);

//   const styles = {
//     areaContainer: {
//       background: Color.bg_primary, 
//       borderRadius: "6px",
//       padding:'6px'
//     },
//   }
//   return (
//     <>
//     <HeadingBar heading={"Alert"} icon={bell} />
//     <Grid
//         container
//         style={{
//           display: "flex",
//           justifyContent: "start",
//           alignItems: "start",
//           marginTop: "10px",
//           marginBottom: "20px",
//         }}
//         sx={{
//           height: "75vh",
//           overflow: 'auto',
//           '&::-webkit-scrollbar': { display: 'none' },}}
//       >
//         {devices.map((item) => {
//           return(
//             item.batteryCharge<=20 &&
//               <Grid md={12}>
//                 <MainAlertCard data={item} icon={noBattery} title={'Battery Charge is Very Less'}/>
//               </Grid>  
//           )      
//         })}
//         {devices.map((item) => {
//           return(
//             item.HeartBeat>=60 && item.deviceType=="WEARABLES" &&
//               <Grid md={12}>
//                 <MainAlertCard data={item} icon={ecgMonitor} title={'HeartBeat in Dangerous Level'}/>
//               </Grid>  
//           )      
//         })}

//         {devices.map((item) => {
//           return(
//             item.signalStatus==false && 
//               <Grid md={12}>
//                 <MainAlertCard data={item} icon={noSignal} title={'Signal Lost'}/>
//               </Grid>  
//           )      
//         })}
//       </Grid>

//     </>
//   )
// }

// export default Alarms


