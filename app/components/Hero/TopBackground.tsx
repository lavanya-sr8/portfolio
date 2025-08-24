import Image from "next/image";
import React from "react";

const TopBackground = () => {
    return <>
            <div className="absolute w-full max-w-[360px] md:max-w-screen-lg 
            h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
                <div className="w-full h-full relative">
                    <div className="circle-icon top-0 left-[171px] md:top-28 md:left-72">
                        <Image src="/rocket_icon.svg" alt="Rocket Icon" width={23} height={23}/>
                    </div>
                    <div className="circle-icon top-[162px] -left-3 md:top-64 md:left-0">
                        <Image src="/bracket_icon.svg" alt="Bracket Icon" width={23} height={23}/>
                    </div>
                    <div className="circle-icon top-60 left-[149px] md:top-[570px] md:left-44">
                        <Image src="/github_icon.svg" alt="GitHub Icon" width={23} height={23}/>
                    </div>
                    <div className="hidden md:flex circle-icon  md:top-[592px] md:left-[608px]">
                        <Image src="/electricity_icon.svg" alt="Electricity Icon" width={23} height={23}/>
                    </div>
                    <div className="hidden md:flex circle-icon md:top-[158px] md:left-[725px]">
                        <Image src="/merge_icon.svg" alt="Merge Icon" width={23} height={23}/>
                    </div>
                    <div className="hidden md:flex circle-icon md:top-[368px] md:left-[965px]">
                        <Image src="/stack_icon.svg" alt="Stack Icon" width={23} height={23}/>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 w-full h-[795px] opacity-20 bg-[url('/circuit_board_bg.svg')] bg-auto"></div>    
        </>
};

export default TopBackground;