import { Box } from "@mui/system";
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import SideMenu from "../Components/SideMenu";
import Alarms from "../BodyContents/Alarms";
import Dashboard from "../BodyContents/Dashboard";
import HealthMonitor from "../BodyContents/HealthMonitor";
import LocateCrew from "../BodyContents/LocateCrew";
import RestHour from "../BodyContents/RestHour";
import PublicAddress from '../BodyContents/PublicAddress'
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
//start images
import dashBoard from "../Assets/Images/dashBoard.png";
import locateCrew from "../Assets/Images/locateCrew.png";
import healthMonitor from "../Assets/Images/healthMonitor.png";
import restHour from "../Assets/Images/restHour.png";
import alarm from "../Assets/Images/alarm.png";
import publicSpeaking from "../Assets/Images/publicSpeaking.png";
//end images
import {Color} from '../Assets/Constants/Color'

const Home = () => {

  const {  devices,setDevices } =useContext(ContextConsumer);
  const sidMenuWidth = "240px";

  const [menuSeleted, setMenuSeleted] = useState("DASHBOARD");
  const SideBarMenu = [
    { name: "Dashboard", value: "DASHBOARD",image:dashBoard },
    { name: "Alarm", value: "ALARM",image:alarm },
    { name: "Locate Crew", value: "LOCATECREW" ,image:locateCrew},
    { name: "Health Monitor", value: "HEALTHMONITOR",image:healthMonitor },
    { name: "Rest Hour", value: "RESTHOUR" ,image:restHour},
    { name: "Public Address", value: "PUBLICADDRESS" ,image:publicSpeaking},
  ];

  const onChange = (value) => {
    console.log("value : ", value);
    setMenuSeleted(value);
  };
  console.log(devices)
  return (
    <div
      style={{
        backgroundColor: Color.bg_primary,
        height: "100vh",
      }}
    >
      <NavBar drawerWidth={sidMenuWidth}/>
      <SideMenu
        drawerWidth={sidMenuWidth}
        menuItem={SideBarMenu}
        menuSeleted={menuSeleted}
        onChange={onChange}
      />
      <MainBody sidMenuWidth={sidMenuWidth} menuSeleted={menuSeleted} />
    </div>
  );
};

const MainBody = (props) => {
  const { sidMenuWidth, menuSeleted } = props;
  return (
    <Box md={12} marginLeft={sidMenuWidth} style={{marginTop:"60px",padding:'24px 12px 24px 12px'}}>
      {IsDashboardSelected(menuSeleted) && <Dashboard />}
      {IsAlarmSelected(menuSeleted) && <Alarms />}
      {IsLocaateCrewSelected(menuSeleted) && <LocateCrew />}
      {IsHealthMonitorSelected(menuSeleted) && <HealthMonitor />}
      {IsRestHourSelected(menuSeleted) && <RestHour />}
      {IsPublicAddressSelected(menuSeleted) && <PublicAddress />}
    </Box>
  );
};


// helper functions start
const IsDashboardSelected = (value) => {
  return value === "DASHBOARD";
};

const IsAlarmSelected = (value) => {
  return value === "ALARM";
};

const IsLocaateCrewSelected = (value) => {
  return value === "LOCATECREW";
};

const IsHealthMonitorSelected = (value) => {
  return value === "HEALTHMONITOR";
};

const IsRestHourSelected = (value) => {
  return value === "RESTHOUR";
};
const IsPublicAddressSelected = (value) => {
  return value === "PUBLICADDRESS";
};
// helper functions end


export default Home;

