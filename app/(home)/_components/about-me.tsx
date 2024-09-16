"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { Title } from "@/components/title";
import { ElementRef, useRef } from "react";

export function AboutMe() {
  const ref = useRef<ElementRef<"div">>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <main
      id="about-me"
      className="flex flex-col lg:justify-between lg:flex-row"
    >
      <motion.div
        ref={ref}
        initial={{ x: -300, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
        layout={false}
        transition={{ duration: 0.5 }}
        className="space-y-4 lg:w-[50%]"
      >
        <Title>About me</Title>
        <div className="xl:text-xl flex flex-col gap-y-4 text-gray-400 ">
          <p>
            Hello im Vinicius! And i really do like creating web sites,
            i&apos;ve been introduced to web development when i was 14 years old
            by my brother, i struggled a lot in the beginning learning in
            PORTUGOL hahahaha. but turns out that with that opportunity that my
            brother presented me with i discovered my passion with web
            development
          </p>
          <p>
            As I progressed, I had the privilege of working on freelance
            projects using PHP. These experiences were eye-opening, broadening
            my perspective and revealing the vast landscape of web development.
          </p>
          <p>
            Fast-forward to today, and i&apos;ve been learning the javascript
            stack(React, node) for a while had the opportunity of working at a
            OneDesk system and have finishing my bachelor&apos;s degree
          </p>
          <p>
            As I reflect on my journey—from those first lines of PORTUGOL to
            working with modern JavaScript frameworks I&apos;m filled with
            excitement for what&apos;s next. Web development is an ever-evolving
            field, and I&apos;m eager to continue growing, learning, and
            contributing to this dynamic industry.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.65 }}
        className=" flex items-center justify-center   "
      >
        <Image
          className="border-b-4 border-r-4 p-4 transition-all hover:border-white hover:scale-105"
          src="/me.png"
          width="400"
          height="500"
          alt="Despite everthing, its still me"
        />
      </motion.div>
    </main>
  );
}
