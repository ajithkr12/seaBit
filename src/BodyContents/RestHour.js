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

const JsDatetimeToSQLDate = (_datetime) => {
  var startDay = ("0" + _datetime.getDate()).slice(-2);
  var startMonth = ("0" + (_datetime.getMonth() + 1)).slice(-2);
  var startYear = _datetime.getFullYear();
  var startDate = startYear + "-" + startMonth + "-" + startDay;
  return startDate;
};

const RestHour = () => {
  // const { devices, setDevices } = useContext(ContextConsumer);

  const [schedlerDate, setSchedulerDate] = useState({
    start: "2022-01-02",
    end: "2022-03-03",
  });

  return (
    <>
      <HeadingBar icon={Sleep} heading={"Rest Hour"} />

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
      </Grid>

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
          }}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <RestHourTable data={devices} />
        </Grid>

        <Grid
          md={12}
          style={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Export</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RestHour;
