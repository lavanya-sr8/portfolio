import React from "react";
import experiences from "@/data/experiences.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Experience from "./Experience";

const Experiences = () => {
    return (
        <SectionContainer id="experience">
            <div className="section-contents mt-[66px] mb-[66px] md:mb-[43px] md:mx-[64px]">
                <SectionHeader plainText=", Evolved! 📍" highlightText="Experience"/>
                <div className="w-full px-6 md:px-[52px] flex flex-col gap-5 items-center">
                    {experiences.map((experience, index) => (
                        <Experience
                            key={index}
                            id={index}
                            image={experience.image}
                            company={experience.company}
                            role={experience.role}
                            description={experience.description}
                            date={experience.date} />
                    ))} 
                </div>
            </div>
        </SectionContainer>
    )
};

export default Experiences;