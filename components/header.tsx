"use client";

import { Linkedin, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "./nav-link";

export function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const closeDrawer = () => setIsOpen(false);

  return (
    <div
      className={cn(
        `border-b-2 bg-black transition-transform duration-300 z-20 fixed w-full flex items-center justify-between p-4`,
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px]  sm:w-[400px] flex  flex-col"
        >
          <div className="flex flex-col gap-6">
            <NavLink closeDrawer={closeDrawer} href="#about-me">
              About me
            </NavLink>
            <NavLink closeDrawer={closeDrawer} href="#skills">
              Skills
            </NavLink>
            <NavLink closeDrawer={closeDrawer} href="#projects">
              Projects
            </NavLink>
            <NavLink closeDrawer={closeDrawer} href="#contact">
              Contact me
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex gap-x-4 items-center">
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
      </div>

      <div className="flex pl-3 items-center space-x-6">
        <Link
          className="hover:opacity-80 transition"
          href="https://github.com/Haasytr"
          target="_blank"
        >
          <Image src="/git.png" alt="Github" width={32} height={32} />
        </Link>
        <Link
          className="hover:opacity-80 transition"
          href="https://www.linkedin.com/in/vinicius-oliveira-a666941b1/"
          target="_blank"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
