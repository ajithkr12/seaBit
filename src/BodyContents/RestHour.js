import React, { useState } from "react";
import HeadingBar from "../Components/HeadingBar";
import Sleep from "../Assets/Images/sleeping.png";
import { Button, Grid, TextField } from "@mui/material";
import RestHourTable from "../layouts/RestHourTable";
import DateRangePicker from "../Components/DateRangePicker";
import { ContextConsumer } from "../Utils/Context";
import { useContext } from "react";
import moment from "moment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {Color} from '../Assets/Constants/Color'
import {devices} from '../layouts/data'
import Autocomplete from '@mui/material/Autocomplete';
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';
import PDFExport from "../ExportPDF/PDFExport";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const JsDatetimeToSQLDate = (_datetime) => {
  var startDay = ("0" + _datetime.getDate()).slice(-2);
  var startMonth = ("0" + (_datetime.getMonth() + 1)).slice(-2);
  var startYear = _datetime.getFullYear();
  var startDate = startYear + "-" + startMonth + "-" + startDay;
  return startDate;
};

const RestHour = () => {
  const { devices, setDevices } = useContext(ContextConsumer);
  const [selectedOption, setSelectedOption] = useState(null);
  let fileNumber = 234124;
  const fileName = `file-${fileNumber}.pdf`;


  return (
    <>
      <HeadingBar icon={Sleep} heading={"Rest Hour"} />

      <Grid md={12} 
   
        style={{
          // marginTop: "20px",
          display: "flex",
          justifyContent: 'space-between',
          alignItems: "center",
          padding:'12px'
        }}

      >
        <Grid >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Start Date "
          inputFormat="MM/DD/YYYY"
          // value={startDate}
          // onChange={(newDate) => {
          //   setStartDate(newDate._d);
          // }}
          renderInput={(params) => <TextField {...params} 
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderRadius:"8px",
                                            padding:"0px 12px"
                                          },
                                        }
                                      }}
                                      style={{width:"140px",fontSize:"14px",}}
                                      size="small"
                                    />}
        />
      </LocalizationProvider>
        <>{"   -   "}</>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Start Date "
            // inputFormat="MM/DD/YYYY"
            // value={new Date()}
            // onChange={(newDate) => {
            //   setStartDate(newDate._d);
            // }}
            renderInput={(params) => (
              <TextField
              size="small"
              {...params}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "8px",
                      // padding: "0px 12px",
                    },
                  },
                }}
                style={{ width: "400px",}}
              />
            )}
          />
        </LocalizationProvider>   

        </Grid>


        <Autocomplete
            disablePortal
            size="small"
            id="combo-box-demo"
            options={devices}
            getOptionLabel={(option) => option.deviceName}
            sx={{ width: 300 }}
            onChange={(e, value) => setSelectedOption(value)}
            renderInput={(params) => <TextField {...params} label="Select Employee/Device" />}
          /> 
          <PDFDownloadLink document={<PDFExport />} fileName={fileName} style={{textDecoration:'none'}}>
            <Button variant="outlined" startIcon={<FileDownloadIcon/>} style={{margin:'0px'}}>Export to Pdf</Button>  
          </PDFDownloadLink>

      </Grid>


{/* 
      <Grid md={12} 
      style={{
        marginTop:"20px"
      }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            size='small'
            label="Start Date "
            inputFormat="MM/DD/YYYY"
            renderInput={(params) => (
              <TextField
              size='small'
                {...params}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "8px",
                      padding: "0px 8px",
                    },
                  },
                }}
                style={{ width: "200px", fontSize: "14px" }}
              />
            )}
          />
        </LocalizationProvider>
        <>{"   -   "}</>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Start Date "
            // inputFormat="MM/DD/YYYY"
            // value={new Date()}
            // onChange={(newDate) => {
            //   setStartDate(newDate._d);
            // }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "8px",
                      padding: "0px 12px",
                    },
                  },
                }}
                style={{ width: "200px", fontSize: "14px" }}
                size="small"
              />
            )}
          />
        </LocalizationProvider>
      </Grid> */}

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          marginTop: "20px",
        }}
      >
        <Grid
          md={12}
          style={{
            backgroundColor: Color.bg_secondary,
            borderRadius: "12px",
            height: "62vh",
            overflowY: "auto",
            overflowX: "auto",
          }}
          sx={{
            // maxWidth: "100%",
            "&::-webkit-scrollbar": {
              height: 6,
              width:6,
              margin:'8px'
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "white",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "grey",
              borderRadius: 2,
            },
          }}
        >
          <RestHourTable data={devices} />
        </Grid>

        {/* <Grid
          md={12}
          style={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Export</Button>
        </Grid> */}
      </Grid>
    </>
  );
};

export default RestHour;


const options = [
  { label: 'Master', id: 1 },
  { label: 'Chief off', id: 2 },
  { label: '2 off', id: 1 },
  { label: '3 off', id: 2 },
];