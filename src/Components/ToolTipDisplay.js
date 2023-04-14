import React from 'react'

const ToolTipDisplay = (props) => {
    const {item} = props;
    console.log('item>>>',item)
    return(
        <div>
            <h4 style={{margin:"4px"}}>Device Name : {item.deviceName}</h4>
            <h4 style={{margin:"4px"}}>HeartBeat : {item.HeartBeat}</h4>
            <h4 style={{margin:"4px"}}> SpO2 : {item.SpO2} </h4>
            <h4 style={{margin:"4px"}}> Temperature :{item.Temperature}</h4>
            <h4 style={{margin:"4px"}}>Status :{item.Status} </h4>
        </div>
    )
}

export default ToolTipDisplay