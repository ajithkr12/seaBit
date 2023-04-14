import { Grid } from '@mui/material';
import React from 'react'
import HeadingBarWithIndicator from "../Components/HeadingBarWithIndicator";
import NotificationCard from "../Components/NotificationCard";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import { devices } from './data';

const AlertArea = () => {
  const {  setDevices } =useContext(ContextConsumer);
  
  return (
    <div>
      <HeadingBarWithIndicator heading={"Alert Area"} dColor='#ea8787'/>
      <Grid
        sx={{
          height: "66vh",
          overflow: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          // '&::-webkit-scrollbar': { width : 2 },
        }}
      >
      {devices.map((data,index)=> {
        return(
          data.locationType == "ALERT" &&
          <NotificationCard data={data} dColor='#ea8787'/>
        )
      }
      )}

      </Grid>
    </div>
  )
}

export default AlertArea