import React from "react";
import { Divider, Grid } from "@mui/material";

const HealthDataTable = (props) => {
  const { HealthData } = props;
  return (
    <>
      <Grid md={12} style={styles.mainContainer}>
        <table style={styles.tableContainer}>
          <thead
            style={{
              backgroundColor: "#9d9c9f",
              borderRadius: "20px",
              position: "sticky",
              top: 0,
            }}
          >
            <tr style={{ backgroundColor: "#9d9c9f", borderRadius: "20px" }}>
              <th style={styles.thStartContainer}>DeviceId</th>
              <th style={styles.thContainer}>HeartBeat</th>
              <th style={styles.thContainer}>SpO2</th>
              <th style={styles.thContainer}>Temperature</th>
              <th style={styles.thEndContainer}>Status</th>
            </tr>
          </thead>

          {HealthData.map((item) => {
            return (
              item.deviceType == "WEARABLES" &&
              <>
                <tr
                  style={{
                    backgroundColor: IsEmergency(item).status
                      ? "#97e084"
                      : "#ea8787",
                    height: "50px",
                  }}
                >
                  <td style={styles.tdContainer}>{item.deviceName}</td>
                  <td style={styles.tdContainer}>{item.HeartBeat}</td>
                  <td style={styles.tdContainer}>{item.SpO2}</td>
                  <td style={styles.tdContainer}>{item.Temperature}</td>
                  <td style={styles.tdContainer}>{item.Status}</td>
                </tr>
                <Divider />
              </>
            );
          })}
        </table>
      </Grid>
    </>
  );
};

const IsEmergency = (conditions) => {
  const { HeartBeat } = conditions;
  if (HeartBeat < 70) {
    return {
      status: true,
      msg: "HB_DOWN",
    };
  }

  return {
    status: false,
    msg: "NORMAL",
  };
};

const styles = {
  mainContainer: {
    display: "flex",
    backgroundColor: "white",
    marginBottom: "10vh",
    borderRadius: "15px",
  },
  tableContainer: {
    borderCollapse: "collapse",
    borderRadius: "16px",
    width: "100%",
    padding: "8px 8px 8px 20px",
  },
  thStartContainer: {
    textAlign: "left",
    padding: "20px 20px 20px 20px",
    borderRadius: "10px 0 0 0",
  },
  thEndContainer: {
    textAlign: "left",
    padding: "20px 20px 20px 20px",
    borderRadius: "0 10px 0 0",
  },
  thContainer: {
    textAlign: "left",
    padding: "20px 20px 20px 20px",
  },
  tdContainer: {
    padding: "8px 8px 8px 20px",
  },
};

export default HealthDataTable;
