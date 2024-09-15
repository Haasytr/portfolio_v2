"use client";

import { ElementRef, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Title } from "@/components/title";
import { ProjectBox } from "./project-box";

export function BestProjects() {
  const ref = useRef<ElementRef<"main">>(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.main
      id="projects"
      ref={ref}
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.65 }}
    >
      <Title>These are some of my projects</Title>
      <div className="flex gap-10">
        <ProjectBox
          href="https://github.com/Haasytr/trello-clone"
          technologies={[
            { name: "NextJS" },
            { name: "Prisma" },
            { name: "Docker" },
          ]}
          title="Creating a trello clone with next from scratch"
          description="Building a project utilizing clerk provider, prisma, shadcn and more to create a very similar project to trello"
        />
        <ProjectBox
          href="https://github.com/Haasytr/backendWithPrisma"
          technologies={[
            { name: "NodeJS" },
            { name: "Prisma" },
            { name: "Docker" },
          ]}
          title="Creating a wellhub system to check-in in gyms"
          description="building a project where the user could check-in in gyms utilizing geo localization, log-in and create his own gym"
        />
        <ProjectBox
          href="https://github.com/Haasytr/trello-clone"
          technologies={[
            { name: "NextJS" },
            { name: "NestJS" },
            { name: "Golang" },
            { name: "Kong" },
            { name: "Prisma" },
            { name: "Docker" },
          ]}
          title="Creating a full cycle ticket app"
          description="i managed to create an amazing full cycle project, a site that connects with partners and disponibilizes their tickets to events going from golang to Next"
        />
      </div>
    </motion.main>
  );
}
