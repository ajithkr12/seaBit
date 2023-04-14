import React from "react";
import { Box } from "@mui/material";
import device from "../Assets/Images/device.png";
const HealthCard = (props) => {
  const { data,statusMessage } = props;
  const styles = {
    mainContainer: {
      flexDirection: "column",
      display: "flex",
      padding: "4% 0 4% 5%",
      maxWidth: "90%",
      background: statusMessage.status ? "#ea8787" : "#ffffff",
      borderRadius: "12px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2%",
      borderRadius: "6px",
    },
    tittleContainer: {
      marginLeft: "14px",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
    },
  };
  return (
    <Box style={styles.mainContainer}>
      <Box style={{ display: "flex" }}>
        <Box style={styles.imageContainer}>
          <img src={device} alt="logo" style={{ width: "30px" }} />
        </Box>
        <Box style={styles.tittleContainer}>
          {/* <h4 style={{ margin: "0px", fontSize: "14px", lineHeight: "18px" }}>{data.deviceName}</h4> */}
          <h5  style={{ margin: "0px", fontSize: "12px", lineHeight: "16px" }}>{data.userName} | {data.location}</h5>
          {/* {statusMessage.status &&
              {statusMessage.warnings.map((warning, i) => (
                <h6  key={i} style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}>{statusMessage.msg}</h6>

              ))}

          } */}
          {statusMessage.status && (
           
            <>
              {statusMessage.warnings.map((warning, i) => (
                <h6 key={i} style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}>{warning}</h6>
              ))}     
            </>
          )}

        </Box>
      </Box>

      {/* <Box>
        <h5 style={{ margin: "0px", fontSize: "12px", lineHeight: "22px" }}>
          Heartbeat {data.HeartBeat}
        </h5>
        <h6 style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}>
          SpO2 {data.SpO2}
        </h6>
        <h6 style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}>
          Temperature {data.Temperature}
        </h6>
        <h6 style={{ margin: "0px", fontSize: "10px", lineHeight: "14px" }}>
          Status {data.Status}
        </h6>
      </Box> */}
    </Box>
  );
};

export default HealthCard;
