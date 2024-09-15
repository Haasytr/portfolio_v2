"use client";

import { motion, useInView } from "framer-motion";

import { Title } from "@/components/title";
import { SkillBox } from "./skill-box";
import { ElementRef, useRef } from "react";

export function Skills() {
  const ref = useRef<ElementRef<"main">>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.main
      id="skills"
      ref={ref}
      initial={{ x: -300, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Title>My skills</Title>
      <div className="text-xl text-gray-400 ">
        <p>
          Throught this time that i&apos;ve been developing i came across some
          amazing technologies and these are that i utilize the most!
        </p>
      </div>
      <div className="flex gap-x-10">
        <SkillBox imgSrc="/next-js.svg" alt="NextJS" />
        <SkillBox imgSrc="/react.png" alt="ReactJS" />
        <SkillBox imgSrc="/node.png" alt="NodeJS" />
        <SkillBox imgSrc="/php.png" alt="PHP" />
        <SkillBox imgSrc="/shadcn.png" alt="Shadcn" />
        <SkillBox imgSrc="/tailwind.png" alt="Tailwind" />
        <SkillBox imgSrc="/nest.svg" alt="nestJS" />
      </div>
    </motion.main>
  );
}
