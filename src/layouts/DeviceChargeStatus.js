import React from 'react'
import HeadingBarWithSearch from "../Components/HeadingBarWithSearch";
import BatteryStatusCard from '../Components/BatteryStatusCard';
import { Grid } from '@mui/material';

import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";

const DeviceChargeStatus = (props) => {
  const {heading,sortValue,icon} = props;
  const { setDevices } =useContext(ContextConsumer);

  var devices =[ 
      {deviceId:1234,deviceType:"WEARABLES",deviceName:"Device 1",locationType:"NORMAL",location:"B12",batteryCharge:"60",time:"10:32 AM", HeartBeat: 68,SpO2: "10",Temperature: "10",Status: "Laying",    workHour: 68,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:1564,deviceType:"BEACONS",deviceName:"Device 3",locationType:"ALERT",location:"R25",batteryCharge:"1",time:"10:36 AM",HeartBeat: null,SpO2: "",Temperature: "",Status: "",workHour: 100,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:3234,deviceType:"WEARABLES",deviceName:"Device 6",locationType:"NORMAL",location:"A56",batteryCharge:"92",time:"10:32 AM", HeartBeat: 100,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:false},
      {deviceId:1864,deviceType:"BEACONS",deviceName:"Device 8",locationType:"ALERT",location:"R65",batteryCharge:"50",time:"10:36 AM",HeartBeat: null,SpO2: "",Temperature: "",Status: "",workHour: 60,RestHour: 12,StartDate: "10/10/2022", EndDate: "10/11/2022",signalStatus:true},

      {deviceId:2364,deviceType:"WEARABLES",deviceName:"Device 4",locationType:"NORMAL",location:"B13",batteryCharge:"50",time:"10:32 AM",HeartBeat: 90,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 60,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:5647,deviceType:"BEACONS",deviceName:"Device 9",locationType:"ALERT",location:"R27",batteryCharge:"24",time:"10:36 AM",HeartBeat: null,SpO2: "",Temperature: "",Status: "",workHour: 72,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:7234,deviceType:"WEARABLES",deviceName:"Device 2",locationType:"NORMAL",location:"A12",batteryCharge:"96",time:"10:32 AM",HeartBeat: 68,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:false},
      {deviceId:5564,deviceType:"BEACONS",deviceName:"Device 5",locationType:"ALERT",location:"R05",batteryCharge:"16",time:"10:36 AM",HeartBeat: 60,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 70,RestHour: 10,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},

      {deviceId:2366,deviceType:"WEARABLES",deviceName:"Device 10",locationType:"NORMAL",location:"B14",batteryCharge:"20",time:"10:32 AM",HeartBeat: 90,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:7237,deviceType:"WEARABLES",deviceName:"Device 11",locationType:"NORMAL",location:"A15",batteryCharge:"56",time:"10:32 AM",HeartBeat: 78,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:2368,deviceType:"WEARABLES",deviceName:"Device 16",locationType:"ALERT",location:"B18" ,batteryCharge:"30",time:"10:32 AM",HeartBeat: 50,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:false},
      {deviceId:7239,deviceType:"WEARABLES",deviceName:"Device 15",locationType:"NORMAL",location:"A32",batteryCharge:"76",time:"10:32 AM",HeartBeat: 90,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:7239,deviceType:"WEARABLES",deviceName:"Device 22",locationType:"NORMAL",location:"A32",batteryCharge:"76",time:"10:32 AM",HeartBeat: 93,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
      {deviceId:7239,deviceType:"WEARABLES",deviceName:"Device 23",locationType:"NORMAL",location:"A32",batteryCharge:"76",time:"10:32 AM",HeartBeat: 95,SpO2: "10",Temperature: "10",Status: "Laying",workHour: 90,RestHour: 12,StartDate: "10/10/2022",EndDate: "10/11/2022",signalStatus:true},
  ];


  console.log("devices: ",devices);
  // sorting
  function compare( a, b ) {
    if ( a.batteryCharge < b.batteryCharge ){
      return -1;
    }
    if ( a.batteryCharge > b.batteryCharge ){
      return 1;
    }
    return 0;
  }  
  devices.sort( compare );
  // sorting


  return (
    <div>
      <HeadingBarWithSearch heading={heading} icon={icon}/>
      <Grid
        sx={{
          height: "35vh",
          overflow: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          // '&::-webkit-scrollbar': { width : 2 },
        }}
      >
      {devices.map((data,index)=> {
        return(
          data.deviceType == sortValue &&
          <BatteryStatusCard data={data}/>
        )
      }
      )}
      </Grid>
    </div>
  )
}

export default DeviceChargeStatus;




