import React from 'react';

const DoughnutChart = ({ data }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0); // calculate total value of all data points
  const centerX = 50; // x coordinate of center of chart
  const centerY = 50; // y coordinate of center of chart
  const radius = 20; // radius of chart
  const strokeWidth = 15; // width of each segment

  let startAngle = 0; // starting angle for first segment

  // map over data and create SVG path for each segment
  const segments = data.map((d, i) => {
    const segmentAngle = (d.value / total) * 360; // calculate angle of current segment
    const endAngle = startAngle + segmentAngle; // calculate ending angle for current segment
    const largeArcFlag = segmentAngle > 180 ? 1 : 0; // set flag for whether arc should be "large" or "small"
    const x1 = centerX + radius * Math.cos((Math.PI * startAngle) / 180); // calculate starting x coordinate of segment
    const y1 = centerY + radius * Math.sin((Math.PI * startAngle) / 180); // calculate starting y coordinate of segment
    const x2 = centerX + radius * Math.cos((Math.PI * endAngle) / 180); // calculate ending x coordinate of segment
    const y2 = centerY + radius * Math.sin((Math.PI * endAngle) / 180); // calculate ending y coordinate of segment
    startAngle = endAngle; // set starting angle for next segment

    return (
      <path
        key={i}
        d={`M${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`}
        stroke={d.color}
        strokeWidth={strokeWidth}
        fill='none'
      />
    );
  });

  return (
    <svg viewBox='0 0 100 100' height="100%" width="100%">
      {segments}
      <circle cx={centerX} cy={centerY} r={radius - strokeWidth / 2} fill='white' />
      {/* <text x={centerX} y={centerY} textAnchor='middle' dominantBaseline='middle' fill="white" font-size="10px">
        {total} %
      </text> */}
    </svg>
  );
};

export default DoughnutChart;