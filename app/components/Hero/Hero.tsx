import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center z-20 mx-auto gap-10 px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
            
            {/* Text Section */}
            <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left md:max-w-xl">
                <h1 className="font-semibold text-2xl md:text-4xl leading-snug">
                    <span className="block">👋🏻 Hello, I&#8217;m Lavanya!</span>
                    <span className="block text-[27px] md:text-[42px]">
                        I&#8217;m an <span className="text-[27px] md:text-[42px] font-bold">Aspiring Software Engineer</span>
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-black-300">
                    I focus on crafting scalable algorithms, building intelligent models, 
                    and developing modern web applications.
                </p>
                <a 
                    href="#contact"
                    className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg flex items-center gap-2 text-base md:text-lg self-center md:self-start"
                >
                    Connect With Me 
                    <img src="/arrow_right_icon.svg" alt="Right arrow icon"/>
                </a>
            </div>

            <div className="flex-shrink-0">
                <Image 
                    src="/me.png" 
                    alt="Lavanya's profile picture" 
                    width={357} 
                    height={417} 
                    className="hidden md:block w-[357px] h-[417px] object-cover"
                />
            </div>
        </section>
    );
}

export default Hero;
