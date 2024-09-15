"use client";

import { ElementRef, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import { Title } from "@/components/title";

export function ContactMe() {
  const ref = useRef<ElementRef<"div">>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -300, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
      transition={{ duration: 1, delay: 0.65 }}
      id="contact"
      className="flex flex-col space-y-5"
    >
      <Title>Contact me</Title>
      <p className="text-xl flex flex-col gap-y-4 text-gray-400">
        Im always looking for new opportunities so feel free to contact me
      </p>
      <div className="max-w-[50%] space-y-4">
        <div className="p-3 border-2 flex space-x-4 items-center  text-lg rounded-md">
          <Mail />
          <span>Email: viniciuszero@live.com</span>
        </div>
        <div className="p-3 border-2 flex space-x-4 items-center  text-lg rounded-md">
          <Phone />
          <span>Phone: +55 (15) 99852-8626</span>
        </div>
      </div>
    </motion.div>
  );
}
