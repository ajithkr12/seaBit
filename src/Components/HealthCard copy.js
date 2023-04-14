import React from "react";
import { Box } from "@mui/material";
import bell from "../Assets/Images/bell.png";
const HealthCard = (props) => {
  const { data } = props;
  const styles = {
    mainContainer: {
      flexDirection: "column",
      display: "flex",
      padding: "6% 0 6% 6%",
      maxWidth: "90%",
      background: data.HeartBeat < 70 ? "#ea8787" : "#ffffff",
      borderRadius: "12px",
    },
    imageContainer: {
      background: "#DBE5FF",
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
          <img src={bell} alt="logo" style={{ width: "30px" }} />
        </Box>
        <Box style={styles.tittleContainer}>
          <h4 style={{ margin: "0px", fontSize: "14px", lineHeight: "18px" }}>
            {" "}
            {data.deviceName}
          </h4>
        </Box>
      </Box>

      <Box>
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
      </Box>
    </Box>
  );
};

export default HealthCard;
