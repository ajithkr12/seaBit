import React from "react";
import { Grid, Button, Divider } from "@mui/material";
import HealthDataTable from "../layouts/HealthDataTable";
import HealthCard from "../Components/HealthCard";
import HealthCardWoWarnning from "../Components/HealthCardWoWarnning";

import HeadingBar from "../Components/HeadingBar";
import bell from "../Assets/Images/bell.png";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import Tooltip from '@mui/material/Tooltip';
import ToolTipDisplay from '../Components/ToolTipDisplay'
import {Color} from '../Assets/Constants/Color'
import {devices} from '../layouts/data'

const HealthMonitor = () => {
  const {  setDevices } = useContext(ContextConsumer);

  return (
    <>
      <HeadingBar heading={"Alert"} icon={bell} />
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        {devices.map((item) => {
          const statusMessage =IsEmergency(item)
          console.log('>>>>>',statusMessage)
          return (
            item.deviceType == "WEARABLES" &&
            IsEmergency(item).status && (
              <Tooltip title={<ToolTipDisplay item={item} />} 
              componentsProps={{
                tooltip: {
                  sx: {
                    color: "purple",
                    backgroundColor: "#c8f1de",
                    fontSize: "14px",
                  },
                },
                arrow: {
                  sx: {
                    color: "#c8f1de",
                  },
                },
              }}
              placement="right"
              arrow
              >
              <Grid xs={3} style={{marginBottom:'8px'}}>
                <HealthCard data={item} statusMessage={statusMessage}/>
              </Grid>
              </Tooltip>
            )
          );
        })}
      </Grid>

      <HeadingBar heading={"Devices"} icon={bell} />
        <Grid
          container
          rowSpacing={1}
          xs={12}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{
            height: "30vh",
            overflowY: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            marginTop: "10px",
          }}
        >
          {devices.map((item) => {
            const statusMessage =IsEmergency(item)
            return (
              item.deviceType == "WEARABLES" && (
                <Tooltip title={<ToolTipDisplay item={item} />} 
                componentsProps={{
                  tooltip: {
                    sx: {
                      color: "purple",
                      backgroundColor: "#c8f1de",
                      fontSize: "14px",
                    },
                  },
                  arrow: {
                    sx: {
                      color: "#c8f1de",
                    },
                  },
                }}
                placement="right"
                arrow>
                <Grid item xs={3}>
                  <HealthCardWoWarnning data={item} statusMessage={statusMessage}/>
                </Grid>
                </Tooltip>
              )
            );
          })}
        </Grid>

        <Grid
          md={12}
          style={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Export</Button>
        </Grid>

    </>
  );
};

const IsEmergency = (conditions) => {
  const { HeartBeat,SpO2,batteryCharge} = conditions;
  let warnings = [];
  let status=false;
  if (HeartBeat < 70 || HeartBeat > 75) {
    warnings.push('Heart rate in dangerous level');
    status=true
    // return {
    //   status: true,
    //   // msg: "HB_DOWN",
    //   warnings
    // };
  }
  if (SpO2 < 12) {
    warnings.push('spO2 in dangerous level');
    status=true

    // return {
    //   status: true,
    //   // msg: "HB_UP",
    //   warnings
    // };
  }
  if (batteryCharge < 20) {
    warnings.push('Battery level in dangerous level');
    status=true

    // return {
    //   status: true,
    //   // msg: "HB_UP",
    //   warnings
    // };
  }

  return {
    status,
    // msg: "NORMAL",
    warnings
  };
};

export default HealthMonitor;
