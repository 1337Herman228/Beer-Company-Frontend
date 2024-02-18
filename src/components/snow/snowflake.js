import React from 'react';

const ColoredSvg = ({ color, width, height }) => {
  const svgStyle = {
    width: `${width}px`,
    height: `${height}px`,
    marginLeft:-7,  
    marginTop:-1,
  };

  return (
    <div style={svgStyle}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill={color} fillOpacity="0.01" />
            <path d="M24 4V44" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.72461 14L41.3656 34" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.71923 33.9773L41.2814 14.0228" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 10L15 19L6 21" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 27L15 29L12 38" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 10L33 19L42 21" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 27L33 29L36 38" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 7L24 13L30 7" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 41L24 35L30 41" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default ColoredSvg;