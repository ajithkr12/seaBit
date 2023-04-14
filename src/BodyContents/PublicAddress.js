import React, { useState } from "react";
import HeadingBar from "../Components/HeadingBar";
import megaphone from "../Assets/Images/megaphone.png";
import { Button, Grid, TextField } from "@mui/material";

import {Color} from '../Assets/Constants/Color'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import Autocomplete from '@mui/material/Autocomplete';


const PublicAddress = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkboxes, setCheckboxes] = useState({
    allCrew: false,
    deckCrew: false,
    engineCrew: false,
    gallery: false
  });
  const [text, setText] = useState('');
  const handleCheckboxChange = (event) => {
    setCheckboxes({ ...checkboxes, [event.target.name]: event.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedOption,
      checkboxes,
      text
    });
  };

  return (
    <>
      <HeadingBar icon={megaphone} heading={"Public Address"} />
      <form onSubmit={handleSubmit} fullWidth>

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          marginTop: "20px",
          backgroundColor: Color.bg_secondary,
          borderRadius: "12px",
          height: "62vh",
        }}
      >
 
        <Grid md={12}>
        <Grid md={12} style={{padding:'18px 12px'}}>
                  <TextField
                  fullWidth
          id="outlined-multiline-flexible"
          label="Type the message...."
          multiline
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}

        />
        </Grid>
        <Grid md={12} style={{padding:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <FormControlLabel control={<Checkbox checked={checkboxes.allCrew} onChange={handleCheckboxChange} name="allCrew" />} label="All Crew"/>
            <FormControlLabel control={<Checkbox checked={checkboxes.deckCrew} onChange={handleCheckboxChange} name="deckCrew" />} label="Deck Crew"/>
            <FormControlLabel control={<Checkbox checked={checkboxes.engineCrew} onChange={handleCheckboxChange} name="engineCrew" />} label="Engine Crew"/>
            <FormControlLabel control={<Checkbox checked={checkboxes.gallery} onChange={handleCheckboxChange} name="gallery" />} label="Gallery"/>
          </div>
          {/* <div>
          <Autocomplete
            disablePortal
            size="small"
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            onChange={(e, value) => setSelectedOption(value)}
            renderInput={(params) => <TextField {...params} label="Select Crew" />}
          />

          </div> */}

        </Grid>
        <Grid md={12} style={{padding:'12px',display:'flex',justifyContent:'end'}}>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        </Grid>
        </Grid>
      </Grid>
      </form>

    </>
  );
};

export default PublicAddress;
const options = [
  { label: 'Master', id: 1 },
  { label: 'Chief off', id: 2 },
  { label: '2 off', id: 1 },
  { label: '3 off', id: 2 },
];