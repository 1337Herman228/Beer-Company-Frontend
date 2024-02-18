import React, { useEffect, useState } from 'react';

const Snowfall = React.memo( ({ isSnow }) => {
  const [isSnowing, setIsSnowing] = useState(isSnow);
  
  useEffect(() => {
    setIsSnowing(isSnow);
  },[isSnow])

  return (
    <div style={{width:'920px', height:'50px'}}>
      {/* <button onClick={startSnowfall}>Go</button>
      <button onClick={stopSnowfall}>Stop</button> */}
      {isSnowing && (
        <div id="embedim--snow">
        <style>
          {`
          .embedim-snow {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            margin-top: -10px;
          }
      
          /* Добавьте остальные стили для снега здесь */
          `}
        </style>
        {Array.from({ length: 200 }).map((_, i) => {
          const rndX = (Math.random() * 920000 * 0.0001).toFixed(2);
          const rndO = (Math.random() * 140000 - 70000) * 0.0001;
          const rndT = ((Math.random() * 5 + 3) * 10).toFixed(2);
          const rndS = (Math.random() * 7000 * 0.0001).toFixed(2);
      
          return (
            <i
              key={i}
              className="embedim-snow"
              style={{
                opacity: (Math.random() * 10000 * 0.0001).toFixed(2),
                transform: `translate(${rndX}vw, -10px) scale(${rndS})`,
                animation: `fall-${i} ${Math.random() * 20 + 10}s ${Math.random() * 30}s linear infinite`,
              }}
            >
              <style>
                {`
                @keyframes fall-${i} {
                  ${rndT}% {
                    transform: translate(${(parseFloat(rndX) + rndO).toFixed(2)}vw, ${rndT}vh) scale(${rndS});
                  }
                  to {
                    transform: translate(${(parseFloat(rndX) + rndO / 2).toFixed(2)}vw, 105vh) scale(${rndS});
                  }
                }
                `}
              </style>
            </i>
          );
        })}
      </div>
      )}
    </div>
  );
});

// const Snowfall = ({isSnow}) => {
  
// };

export default Snowfall;