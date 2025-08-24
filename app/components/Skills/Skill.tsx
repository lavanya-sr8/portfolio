"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  // gradient that follows mouse
  const highlight = useMotionTemplate`
    radial-gradient(120px 120px at ${xDistance}px ${yDistance}px, rgba(0,150,255,0.8), transparent)
  `;

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const clientRect = ref.current.getBoundingClientRect();

    xDistance.set(e.clientX - clientRect.left);
    yDistance.set(e.clientY - clientRect.top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Reveal duration={2}>
    <div
      ref={ref}
      className="relative flex gap-2 p-2 border border-[var(--primary)] rounded-lg h-[46px] overflow-hidden"
    >
      {/* motion border highlight */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: highlight,
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px", // border thickness
        }}
      />

      <img src={icon} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
    </Reveal>
  );
};

export default Skill;
