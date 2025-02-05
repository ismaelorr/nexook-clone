"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold"
      >
        Turn your <span className="text-blue-500">free</span> time into{" "}
        <span className="text-blue-500">paid</span> time with 1-1 video calls
      </motion.h2>

      <p className="text-gray-500 mt-4">
        Connect with people who need your expertise and create a steady income
        stream - <strong>one conversation at a time.</strong>
      </p>

      <div className="mt-6 flex justify-center gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="border rounded-full px-6 py-3 w-80"
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default Hero;
