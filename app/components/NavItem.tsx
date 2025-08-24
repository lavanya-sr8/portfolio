import React from "react";
import cn from "classnames";

type NavItemProps = {
  label: string;
  sectionId: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (sectionId: string) => void;
  setIsOpen: (open: boolean) => void;
};

const NavItem = ({
  label,
  sectionId,
  activeSection,
  setActiveSection,
  scrollToSection,
  setIsOpen,
}: NavItemProps) => {
  return (
    <li>
      <div
        className={cn("rounded p-1 cursor-pointer duration-350 ease-in-out", {
          "bg-[var(--primary)] text-white": activeSection === sectionId,
        })}
        onClick={() => {
          setActiveSection(sectionId);
          scrollToSection(sectionId);
          setIsOpen(false);
        }}
      >
        {label}
      </div>
    </li>
  );
};

export default NavItem;
