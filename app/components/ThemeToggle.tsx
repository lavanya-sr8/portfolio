"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches : true);
    
    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if(savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }else{
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        if(typeof window !== "undefined") {
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    }
    
    return <button onClick={toggleTheme} className="cursor-pointer fixed top-[58px] left-6 md:top-16 md:left-auto md:right-[42px] z-50">
        {isDarkMode ? <Image src="/sun_icon.svg" alt="Sun icon" height={25} width={25}/> : <Image src="/moon_icon.svg" alt="Moon icon" height={25} width={25}/>}
    </button>
};

export default ThemeToggle;