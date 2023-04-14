import React from 'react'
import HeadingBarWithIndicator from "../Components/HeadingBarWithIndicator";
import { Grid } from "@mui/material";
import NotificationCard from "../Components/NotificationCard";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import { devices } from './data';
const NormalArea = () => {
  const { setDevices } =useContext(ContextConsumer);
  return (
    <div>
      <HeadingBarWithIndicator heading={"Normal Area"} dColor='#adc8a3'/>
      <Grid
        sx={{
          height: "66vh",
          overflow: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
      {devices.map((data,index)=> {
        return(
          data.locationType == "NORMAL" &&
          <NotificationCard data={data} dColor='#adc8a3'/>
        )
      }
      )}
      </Grid>

    </div>
  )
}

export default NormalArea;