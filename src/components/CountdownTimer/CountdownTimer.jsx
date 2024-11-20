import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, initialMinutes, initialSeconds }) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center bg-[#3B3B3B] bg-opacity-45 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl mb-4 font-mono">Auction ends in:</h1>
      <div className="flex space-x-4 text-4xl font-mono">
        <div className="flex flex-col items-center">
          <span>{formatTime(time.hours)}</span>
          <span className="text-sm">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{formatTime(time.minutes)}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{formatTime(time.seconds)}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;