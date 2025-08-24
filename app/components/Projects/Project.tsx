import React from "react";
import Image from "next/image";
import Reveal from "../Reveal";

type Props = {
    thumbnail: string;
    title: string;
    link: {
        url: string;
        label: string;
    };
    description: string;
    languageIcons: string[];
};

const Project = ({
    thumbnail,
    title,
    link,
    description,
    languageIcons
}: Props) => {
    return (
        <Reveal initialX={-35}>
        {/* <div className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]"> */}
        <div className="card flex flex-col items-stretch w-full max-w-[600px] p-6 md:p-6 gap-6 hover:scale-105 duration-300">
            <Image src={thumbnail} alt={`Thumbnail for ${title}`} width={392} height={230} className="w-full h-[230px] object-cover"/>
            <div className="flex flex-col gap-[11px]">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
                    <a href={link.url} className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]">
                        <img src="link_arrow.svg" alt="Link arrow" className="block"/>
                    </a>
                </div>
                <p className="text-sm md:text-base">{description}</p>
                <div className="flex flex-row gap-[11px]">
                    {languageIcons.map((icon, iconIdx) => (
                        <img src={icon} alt="Language icon" key={iconIdx} height={23} width={31}/>
                    ))}
                </div>
            </div>
        </div>
        </Reveal>
    )
};

export default Project;
