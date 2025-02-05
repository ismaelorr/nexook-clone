"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 18);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-center py-10">
      <div className="text-5xl font-bold">
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </div>
      <p className="text-xl text-gray-500 mt-2">TIL NEXOOK LAUNCHES</p>
    </section>
  );
};

export default Countdown;
