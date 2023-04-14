import React from 'react'
import { Grid } from "@mui/material";
import HeadingBar from "../Components/HeadingBar";
import NotificationCardWithIcon from '../Components/NotificationCardWithIcon';
import bell from "../Assets/Images/bell.png";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
const Notification = (props) => {
  const {notifications,setNotifications } =useContext(ContextConsumer);

  return (
    <div>
      <HeadingBar heading={"Notifications"} icon={bell}/>
      <Grid
      style={{
        marginTop:"20px"
      }}
        sx={{
          height: "40vh",
          overflow: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {notifications.map((data,index)=> (
          <NotificationCardWithIcon data={data}/>
        ))}
      </Grid>
    </div>
  )
}

export default Notification;
