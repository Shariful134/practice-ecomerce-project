"use client";
import React from "react";
import Countdown from "react-countdown";

// টাইমার শেষ হলে
const Completionist = () => <span>⏰ ৪ দিন শেষ!</span>;

// কাস্টম renderer
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="text-xl font-bold text-red-600">
        ⏳ বাকি আছে: {days} দিন, {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    );
  }
};

const CountdownTimer = () => {
  const endTime = Date.now() + 4 * 24 * 60 * 60 * 1000; // ৪ দিনের জন্য

  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold">🔥 Flash Sale শেষ হতে:</h2>
      <Countdown date={endTime} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
