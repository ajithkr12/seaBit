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
              <th style={styles.thContainer}>User-Name</th>

              <th style={styles.thContainer}>1</th>
              <th style={styles.thContainer}>2</th>
              <th style={styles.thContainer}>3</th>
              <th style={styles.thContainer}>4</th>
              <th style={styles.thContainer}>5</th>
              <th style={styles.thContainer}>6</th>
              <th style={styles.thContainer}>7</th>
              <th style={styles.thContainer}>8</th>
              <th style={styles.thContainer}>9</th>
              <th style={styles.thContainer}>10</th>
              <th style={styles.thContainer}>11</th>
              <th style={styles.thContainer}>12</th>
              <th style={styles.thContainer}>13</th>
              <th style={styles.thContainer}>14</th>
              <th style={styles.thContainer}>15</th>
              <th style={styles.thContainer}>16</th>
              <th style={styles.thContainer}>17</th>
              <th style={styles.thContainer}>18</th>
              <th style={styles.thContainer}>19</th>
              <th style={styles.thContainer}>20</th>
              <th style={styles.thContainer}>21</th>
              <th style={styles.thContainer}>22</th>
              <th style={styles.thContainer}>23</th>
              <th style={styles.thContainer}>24</th>
     
              <th style={styles.thContainer}>Work-Hour</th>
              <th style={styles.thEndContainer}>Rest-Hour</th>
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

                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>
                  <td style={styles.tdContainer}><div style={styles.checkbox}></div></td>

                  <td style={styles.tdContainer}>{item.workHour}</td>
                  <td style={styles.tdContainer}>{item.RestHour}</td>
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
    textAlign: "center",
    padding: "20px 4px 20px 4px",
    borderRadius: "10px 0 0 0",
  },
  thEndContainer: {
    textAlign: "center",
    padding: "20px 4px 20px 4px",
    borderRadius: "0 10px 0 0",
  },
  thContainer: {
    textAlign: "center",
    padding: "20px 4px 20px 4px",
  },
  tdContainer: {
    // padding: "8px 8px 8px 8px",
    textAlign:'center'
  },
  checkbox: {
    width:'16px',
    height:'16px',
    backgroundColor:'green',
    margin:'0px 8px 0px 8px'
  },
};

export default RestHourTable;
