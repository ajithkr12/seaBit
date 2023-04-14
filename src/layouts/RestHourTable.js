import React from "react";
import { Divider, Grid, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const RestHourTable = (props) => {
  const { data } = props;

  var date =new Date();
  // date =
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
            <tr style={{ borderRadius: "20px" }}>
              <th style={styles.thStartContainer}>DeviceId</th>
              <th style={styles.thContainer}>User Name</th>
              <th style={styles.thContainer}>Work Hour</th>
              <th style={styles.thContainer}>Rest Hour</th>
              <th style={styles.thContainer}>Start Date</th>
              <th style={styles.thEndContainer}>End Date</th>
            </tr>
          </thead>

          {data.map((item) => {
            return (
              <>
                <tr
                  style={{
                    backgroundColor: "#dec866",
                    height: "50px",
                  }}
                >
                  <td style={styles.tdContainer}>{item.deviceName}</td>
                  <td style={styles.tdContainer}>{item.userName}</td>
                  <td style={styles.tdContainer}>{item.workHour}</td>
                  <td style={styles.tdContainer}>{item.RestHour}</td>
                  <td style={styles.tdContainer}>{item.StartDate}</td>
                  <td style={styles.tdContainer}>{item.EndDate}</td>
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
    // marginBottom: "10vh",
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

export default RestHourTable;
