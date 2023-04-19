import React from 'react'
import HeadingBar from "../Components/HeadingBar";
import PieChart from '../Components/PieChart';
import { Grid} from "@mui/material";

import DoughnutChart from '../Components/DoughnutChart';

import attendanceIcon from "../Assets/Images/attendanceIcon.png"

const Attendance = () => {
  return (
    <>
      <Grid  md={12}>
        <HeadingBar heading={"Attaendance"} icon={attendanceIcon}/>
      </Grid>

      <Grid  md={12} style={{display:'flex',flexDirection:'row'}}>
        <Grid  md={12} item style={{margin:'0px'}}>
          <DoughnutChart data={attendance} />
        </Grid>

          <Grid  md={12} style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center'}} item>
            {attendance.map((attendance) => (
                <Grid style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center',padding:'4px 0px 4px 0px'}} >
                  <div style={{width:'20px',height:'20px',backgroundColor:attendance.color,margin:'0px 8px 0px 8px',}}></div>
                  <p style={{margin:'0px',color:'black'}}>{attendance.label}</p>
                </Grid>          
            ))}
          </Grid>   

      </Grid>


    </>
  )
}

export default Attendance;

const attendance = [
  { label: 'Resting', value: 20, color: '#EA5F89' },
  { label: 'Absent', value: 10, color: '#9B3192' },
  { label: 'Working', value: 15, color: '#57167E' },
];

//  #FFF1C9, #F7B7A3, #EA5F89, #9B3192, #57167E  #2B0B3F 