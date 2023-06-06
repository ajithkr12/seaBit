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
      <Grid md={12} style={styles.mainContainer} id="testId">
        <table style={styles.tableContainer} >
          <thead>
            <tr style={styles.trContainer}>
              <th colspan="52" style={styles.thContainer}>Periods of works are shaded</th>
              <th rowspan="2" style={styles.thContainer}>Hours of Work</th>
              <th rowspan="2" style={styles.thContainer}>Hours of Rest</th>
            </tr>
            <tr>
              <th style={styles.thContainer}>Voyage</th>
              <th style={styles.thContainer}>Date</th>
              <th colspan="2" style={styles.thContainer}>0</th>
              <th colspan="2" style={styles.thContainer}>1</th>
              <th colspan="2" style={styles.thContainer}>2</th>
              <th colspan="2" style={styles.thContainer}>3</th>
              <th colspan="2" style={styles.thContainer}>4</th>
              <th colspan="2" style={styles.thContainer}>5</th>
              <th colspan="2" style={styles.thContainer}>6</th>
              <th colspan="2" style={styles.thContainer}>7</th>
              <th colspan="2" style={styles.thContainer}>8</th>
              <th colspan="2" style={styles.thContainer}>9</th>
              <th colspan="2" style={styles.thContainer}>10</th>
              <th colspan="2" style={styles.thContainer}>11</th>
              <th colspan="2" style={styles.thContainer}>12</th>
              <th colspan="2" style={styles.thContainer}>13</th>
              <th colspan="2" style={styles.thContainer}>14</th>
              <th colspan="2" style={styles.thContainer}>15</th>
              <th colspan="2" style={styles.thContainer}>16</th>
              <th colspan="2" style={styles.thContainer}>17</th>
              <th colspan="2" style={styles.thContainer}>18</th>
              <th colspan="2" style={styles.thContainer}>19</th>
              <th colspan="2" style={styles.thContainer}>20</th>
              <th colspan="2" style={styles.thContainer}>21</th>
              <th colspan="2" style={styles.thContainer}>22</th>
              <th colspan="2" style={styles.thContainer}>23</th>
              <th colspan="2" style={styles.thContainer}>24</th>
            </tr>
          </thead>
          
          <tbody>

            <tr>
              <td style={styles.tdContainer}>Row</td>
              <td style={styles.tdContainer}>12/02/2023</td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.tdContainer}>8.30</td>
              <td style={styles.tdContainer}>15.30</td>     
            </tr>



            <tr>
              <td style={styles.tdContainer}>Row</td>
              <td style={styles.tdContainer}>12/02/2023</td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxWork}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.checkboxRest}></td>
              <td style={styles.tdContainer}>8.30</td>
              <td style={styles.tdContainer}>15.30</td>     
            </tr>

          </tbody>

        </table>
      </Grid>
    </>
  );
};

// const IsEmergency = (conditions) => {
//   const { HeartBeat } = conditions;
//   if (HeartBeat < 70) {
//     return {
//       status: true,
//       msg: "HB_DOWN",
//     };
//   }

//   return {
//     status: false,
//     msg: "NORMAL",
//   };
// };

const styles = {
  mainContainer: {
    display: "flex",
    backgroundColor: "white",
    // marginBottom: "10vh",
    borderRadius: "15px",
    padding:'6px'
  },
  tableContainer: {
    borderWidth:"2px", 
    borderColor:"#aaaaaa", 
    borderStyle:'solid',
    borderCollapse:'collapse',
    width:'100%',
    textAlign:'center',
  },
  trContainer:{
    borderWidth:"1px", 
    borderColor:"#aaaaaa", 
    borderStyle:'solid',
  },
  thContainer: {
    borderWidth:"1px", 
    borderColor:"#aaaaaa", 
    borderStyle:'solid',
    borderCollapse:'collapse',
    fontSize:'16px',
    lineHeight:'24px',
    padding:'0px 8px'

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

  tdContainer: {
    borderWidth:"1px", borderColor:"#aaaaaa", borderStyle:'solid',borderCollapse:'collapse'
  },
  checkboxWork: {
    backgroundColor: "red",
    width:'22px',
    height:'22px',
    borderWidth:"1px", 
    borderColor:"#aaaaaa", 
    borderStyle:'solid',
    borderCollapse:'collapse'
  },
  checkboxRest: {
    backgroundColor: "green",
    width:'22px',
    height:'22px',
    borderWidth:"1px", 
    borderColor:"#aaaaaa", 
    borderStyle:'solid',
    borderCollapse:'collapse'
  },
};

export default RestHourTable;
