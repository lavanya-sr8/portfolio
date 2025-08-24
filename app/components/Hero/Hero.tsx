import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center z-20 mx-auto gap-10 px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
            
            {/* Text Section */}
            <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left md:max-w-xl">
                <Reveal initialX={-30} duration={0.75} delay={0.2}>
                <h1 className="font-semibold text-2xl md:text-4xl leading-snug">
                    <span className="block">👋🏻 Hello, I&#8217;m Lavanya!</span>
                    <span className="block text-[27px] md:text-[42px]">
                        I&#8217;m an <span className="text-[27px] md:text-[42px] font-bold">Aspiring Software Engineer</span>
                    </span>
                </h1>
                </Reveal>
                <Reveal initialX={-35} duration={0.75} delay={0.2}>
                <p className="text-lg md:text-xl text-black-300">
                    I focus on crafting scalable algorithms, building intelligent models, 
                    and developing modern web applications.
                </p>
                </Reveal>
                <div className="group">
                    <Reveal initialX={-40} duration={0.75} delay={0.2}>
                    <a 
                        href="#contact"
                        className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg flex items-center gap-2 text-base md:text-lg self-center md:self-start group-hover:scale-103 duration-250"
                    >
                        Connect With Me 
                        <img src="/arrow_right_icon.svg" alt="Right arrow icon"/>
                    </a>
                    </Reveal>
                </div>
            </div>
            <Reveal>
            <div className="flex-shrink-0">
                <Image 
                    src="/me.png" 
                    alt="Lavanya's profile picture" 
                    width={357} 
                    height={417} 
                    className="hidden md:block w-[357px] h-[417px] object-cover"
                />
            </div>
            </Reveal>
        </section>
    );
}

export default Hero;
