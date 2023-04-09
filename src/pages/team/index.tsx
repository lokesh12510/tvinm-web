import React from "react";
import TeamSection from "@/components/team";
import Head from "next/head";

const Team = () => {
    return (
        <>
            <Head>
                <title>Our Team - TVINM</title>
            </Head>
            <div className="w-full h-[220px] md:h-[300px] relative flex items-center flex-col justify-center text-center overflow-hidden">
                <div className="absolute w-[140%] h-full  bg-[url('/images/team-bg.svg')] bg-cover rounded-b-[50%] pt-[20px] md:pt-[40px]"></div>
                <div className=" z-[2] mb-4">
                    <h3 className="text-3xl font-bold italic space-x-2 mb-4 text-white">Our Team</h3>

                    <p className="text-lg text-white">Informations about our team members</p>
                </div>
            </div>

            <TeamSection />
        </>
    );
};

export default Team;
