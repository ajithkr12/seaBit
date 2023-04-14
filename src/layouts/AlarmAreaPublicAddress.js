import React from 'react'
import HeadingBarWithIcon from "../Components/HeadingBarWithIcon";
import { Grid } from "@mui/material";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import { Box } from "@mui/material";

const AlarmAreaPublicAddress = (props) => {
  const {data,heading,icon}=props
  const { setDevices } =useContext(ContextConsumer);
  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      padding: "1% 0 1% 1%",
      maxWidth: "100%",
      background: "#DBE5FF",
      borderRadius: "8px", position: "relative",
      marginTop: "1%"
    },
    imageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent:'center'
    },
    tittleContainer: {
      marginLeft: "18px",
      flexDirection: "column",
      display: "flex",
      alignItems: "start"
    }
  }
  return (
    <div>
      <HeadingBarWithIcon heading={heading} icon={icon} dColor='#FFFFFF'/>
      <Grid
        sx={{
          height: "55vh",
          overflow: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
      {data.map((data,index)=> {
        return(
          <Box style={styles.mainContainer}>
            <Box style={styles.tittleContainer}>
              <div >
                <h5 style={{ margin: "0px", fontSize: "12px", lineHeight: "20px" }}>{data.msg}</h5> 
                <h5 style={{ margin: "0px", fontSize: "12px", lineHeight: "26px" }}> Date : {data.date} / {data.time}</h5>
              </div>
            </Box>    
          </Box>
        )
      }
      )}
      </Grid>

    </div>
  )
}

export default AlarmAreaPublicAddress;