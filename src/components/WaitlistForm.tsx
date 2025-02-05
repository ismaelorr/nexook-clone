"use client";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email registrado: ${email}`);
    setEmail("");
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Join the waitlist</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-full px-6 py-3"
          required
        />
        <button
          type="submit"
          className="ml-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Join
        </button>
      </form>
    </section>
  );
};

export default WaitlistForm;
