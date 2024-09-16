"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="h-screen  bg-[url('/bg.jpg')] bg-cover">
      <div className="w-full px-5 flex h-full flex-col items-center justify-center bg-black/90">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:max-w-[50%]"
        >
          <span className="lg:text-3xl md:text-2xl text-lg text-orange-500 font-bold">
            Hello, im
          </span>
          <h1 className="text-4xl md:text-5xl  lg:text-8xl mb-5 ">
            Vínicius Santos
          </h1>
          <p className="text-gray-400 text-lg lg:text-3xl">
            Im a fullstack software enginner focused on frontend and sometimes a
            designer im focused on building the most optimized code with a
            strong sense to user experience
          </p>
        </motion.div>
      </div>
    </div>
  );
}
