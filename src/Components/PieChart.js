// import React from 'react'
// import { Box } from "@mui/material";
// const PieChart = () => {

//   const styles = {
//     mainContainer: {
//       flexDirection: "row",
//       display: "flex",
//       padding: "4% 2% 4% 2%",
//       maxWidth: "100%",
//       background: "#FFFFFF",
//     },
//   }
//   return (
//     <Box style={styles.mainContainer}>
//       <h1>AAAAA</h1>
//     </Box>
//   )
// }

// export default PieChart;

import React from "react";
import { Box } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  mainContainer: {
    flexDirection: "row",
    display: "flex",
    padding: "4% 2% 4% 2%",
    maxWidth: "100%",
    background: "#FFFFFF",
    // height: "40vh",
  },
};

const PieChart = (props) => {
  const { attendance } = props;

  const config = {
    labels: ["Resting", "Absent", "Working"],
    datasets: [
      {
        label: "# of Votes",
        data: attendance,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // config.datasets[0].data=attendance;

  console.log("data : ", config);

  return (
    <Box style={{height:"30vh", width:"100%"}}
         sx={{ justifyContent: 'center' }}
    >
      <Doughnut
        data={config}
        style={{marginLeft:"10%"}}
        // options={{radius:"100" }}
        options={{
          radius:"100",
          plugins: {
            legend: {
              position: "right",
            labels: {
              font: {
                  size: 12,

              },
              padding: 10,
            },
            },

          },

          elements: {
            arc: {
              borderWidth: 0,
            },

          },
          // responsive: true,
          // maintainAspectRatio: true,
        }}
      />
    </Box>
  );
};

export default PieChart;
