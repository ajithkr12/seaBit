import React from 'react'
import { Grid } from "@mui/material";
import NormalArea from "../layouts/NormalArea";
import AlertArea from "../layouts/AlertArea";
import {Color} from '../Assets/Constants/Color'

const LocateCrew = () => {

  const styles = {
    areaContainer: {
      padding: "14px 22px", 
      background: Color.bg_secondary, 
      borderRadius: "6px"

    },
  }
  return (
    <Grid container style={{ display: "flex", justifyContent: "center", alignItems: 'start'}}>
      <Grid md={5} style={styles.areaContainer}>
        <NormalArea />
      </Grid>
      <Grid md={1}>
      </Grid>
      <Grid md={5} style={styles.areaContainer}>
        <AlertArea />
      </Grid>
    </Grid>
  )
}

export default LocateCrew
