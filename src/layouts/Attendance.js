import React from 'react'
import HeadingBar from "../Components/HeadingBar";
import PieChart from '../Components/PieChart';
import attendanceIcon from "../Assets/Images/attendanceIcon.png"

const Attendance = () => {
  const attendance = [3, 2, 5];
  return (
    <div>
      <HeadingBar heading={"Attaendance"} icon={attendanceIcon}/>
      <PieChart attendance={attendance}/>
    </div>
  )
}

export default Attendance