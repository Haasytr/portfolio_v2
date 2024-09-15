"use client";

import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        `border-b-2 bg-black transition-transform duration-300 z-20 fixed w-full flex gap-x-12 items-center justify-end p-4`,
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Button variant="ghost">
        <Link href="#about-me">About me</Link>
      </Button>
      <Button variant="ghost">
        <Link href="#skills">Skills</Link>
      </Button>
      <Button variant="ghost">
        <Link href="#projects">Projects</Link>
      </Button>
      <Button variant="ghost">
        <Link href="#contact">Contact me</Link>
      </Button>
      <div className="border-l-2 flex w-[200px] p-5 justify-center space-x-10 items-center">
        <Link
          className="hover:opacity-80 transition"
          href="https://github.com/Haasytr"
          target="_blank"
        >
          <Image src="/git.png" alt="Github" width="40" height="40" />
        </Link>
        <Link
          className="hover:opacity-80 transition"
          href="https://www.linkedin.com/in/vinicius-oliveira-a666941b1/"
          target="_blank"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
