import React, { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";


const DateRangePicker = (props) => {

  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  console.log(startDate)
  console.log(endDate)

  useMemo(() => {
    if(startDate>endDate){
        props.HandleDateSelector({endDate:startDate, startDate:endDate})
    } else{
        props.HandleDateSelector({ startDate: startDate, endDate: endDate });
    }
    
  },[startDate, endDate]);
  
 

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Start Date "
          inputFormat="MM/DD/YYYY"
          value={startDate}
          onChange={(newDate) => {
            setStartDate(newDate._d);
          }}
          renderInput={(params) => <TextField {...params} 
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderRadius:"8px",
                                            padding:"0px 12px"
                                          },
                                        }
                                      }}
                                      style={{width:"200px",fontSize:"14px",}}
                                      size="small"
                                    />}
        />
      </LocalizationProvider>
      
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="End Date "
          inputFormat="MM/DD/YYYY"
          value={endDate}
          onChange={(newDate) => {
            setEndDate(newDate._d);
          }}
          renderInput={(params) => <TextField {...params} 
                                      sx={{
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": {
                                            borderRadius:"8px",
                                            padding:"0px 12px"
                                          },
                                        }
                                      }}
                                      style={{width:"200px",fontSize:"14px"}}
                                      size="small"
                                    />}
        />
      </LocalizationProvider>
  
    </>
  );
};
export default DateRangePicker;


