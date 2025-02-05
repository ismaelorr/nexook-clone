"use client";

import { useState } from "react";

const IncomeCalculator = () => {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);

  const weeklyIncome = hours * rate;
  const monthlyIncome = weeklyIncome * 4;
  const yearlyIncome = monthlyIncome * 12;

  return (
    <section className="py-16 px-6 flex flex-col lg:flex-row items-start lg:gap-16 max-w-6xl mx-auto rounded-3xl shadow-xl bg-white border border-gray-200">
      <div className="lg:w-1/2">
        <p className="text-lg text-gray-700">
          Busy <strong className="font-bold">influencer, freelancer, or expert</strong> with 2-10+ hours free each week?
        </p>
        <p className="mt-4 text-gray-600">
          That free time could be bringing in <strong className="font-bold">thousands</strong> of dollars — without any extra work or effort.
        </p>
        <p className="mt-4 text-lg font-semibold text-blue-500">That's Nexook.</p>
        <p className="mt-4 text-gray-600">
          So, just how much more could you earn every week... just sharing your skills and passions?
        </p>
        <p className="mt-4 font-bold">
          Join the waitlist today for exclusive early access perks -{" "}
          <span className="text-black">limited availability!</span>
        </p>
      </div>
      <div className="lg:w-1/2 mt-10">
          <h2 className="text-xl font-bold">Extra Income Calculator</h2>
          <p className="text-gray-500 mt-2">How much more could you earn?</p>
          <div className="mt-6">
            <p className="text-gray-700">How many free hours do you have per week?</p>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-2 bg-white shadow-sm">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Math.max(0, parseInt(e.target.value)))}
                className="w-full text-lg outline-none bg-transparent text-right"
              />
              <button
                onClick={() => setHours(Math.max(0, hours - 1))}
                className="px-3 text-gray-500 hover:text-black"
              >
                −
              </button>
              <button
                onClick={() => setHours(hours + 1)}
                className="px-3 text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-700">What would your hourly rate be for 1:1 calls?</p>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-2 bg-white shadow-sm">
              <span className="text-gray-500">$</span>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Math.max(0, parseInt(e.target.value)))}
                className="w-full text-lg outline-none bg-transparent text-right"
              />
              <button
                onClick={() => setRate(Math.max(0, rate - 5))}
                className="px-3 text-gray-500 hover:text-black"
              >
                −
              </button>
              <button
                onClick={() => setRate(rate + 5)}
                className="px-3 text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <div className="bg-blue-100 text-blue-500 font-bold text-2xl px-8 py-4 rounded-full shadow-md">
              +${yearlyIncome.toLocaleString()} per year
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-lg">
              <p>
                +${monthlyIncome.toLocaleString()}{" "}
                <span className="text-sm text-gray-500">per month</span>
              </p>
              <p>
                +${weeklyIncome.toLocaleString()}{" "}
                <span className="text-sm text-gray-500">per week</span>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default IncomeCalculator;
