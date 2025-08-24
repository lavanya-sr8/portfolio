"use client";

import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import NavItem from "./NavItem"; // import component
import Reveal from "./Reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setActiveSection("home");
  }, []);
  
  const smoothScrollTo = (targetY: number, duration: number = 800) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startY + diff * percent);
    if (time < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(y, 300);
    }
  }, []);


  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        className="bg-background cursor-pointer card-shadow p-3 md:hidden rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
      >
        <img
          src="/menu_icon.svg"
          alt="menu icon"
          width={19}
          height={19}
        />
      </button>

      <Reveal initialY={-20} duration={0.5}>
      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-350 ease-in-out",
          {
            "opacity-100": isOpen,
            "opacity-0 md:opacity-100": !isOpen,
          }
        )}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
          <NavItem
            label="Home"
            sectionId="home"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            setIsOpen={setIsOpen}
          />
          <NavItem
            label="Skills"
            sectionId="skills"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            setIsOpen={setIsOpen}
          />
          <NavItem
            label="Projects"
            sectionId="projects"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            setIsOpen={setIsOpen}
          />
          <NavItem
            label="Experience"
            sectionId="experience"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            setIsOpen={setIsOpen}
          />
          <NavItem
            label="Contact"
            sectionId="contact"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            setIsOpen={setIsOpen}
          />
        </ul>
      </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
