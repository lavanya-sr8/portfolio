import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import Image from "next/image";

type Props = {};

const Projects = () => {
    return (
        <SectionContainer id="projects">
            <div className="section-contents mx-6 md:mx-[64px]">
                <SectionHeader highlightText="My Projects" plainText="so far ⚡"/>
                <div className="lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {
                        projects.map((project, index) => (
                            <Project key={index} thumbnail={project.thumbnail} title={project.title} description={project.description} link={project.link} languageIcons={project.languageIcons} />
                        ))
                    }
                </div>
                <div className="group">
                <a 
                    href="https://github.com/lavanya-sr8"
                    className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg flex items-center gap-2 text-base md:text-lg mx-auto mt-10 group-hover:scale-103 duration-250"
                >
                    Check out my GitHub
                    <img src="/github_logo_dark.svg" alt="GitHub icon"/>
                </a>
                </div>
            </div>
        </SectionContainer>
    )
};

export default Projects;
