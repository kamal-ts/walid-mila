import React, { useState, useEffect } from 'react';
import '../Snowfall.css';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const snowflakeCount = 50;

    const createSnowflake = () => ({
      left: Math.random() * window.innerWidth,
      animationDelay: Math.random() * 5,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 5 + 5,
    });

    const newSnowflakes = Array.from({ length: snowflakeCount }, createSnowflake);
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="snowfall z-[1000]">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.animationDelay}s`,
            width: flake.size,
            height: flake.size,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
