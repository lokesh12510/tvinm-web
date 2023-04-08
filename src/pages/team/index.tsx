import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import { teamList } from "./types";
import MainCard from "./MainCard";
import SubCard from "./SubCard";

const Team = () => {
    return (
        <>
            <div className="w-full h-[220px] md:h-[300px] relative flex items-center flex-col justify-center text-center overflow-hidden">
                <div className="absolute w-[140%] h-full  bg-[url('/images/team-bg.svg')] bg-cover rounded-b-[50%] pt-[20px] md:pt-[40px]"></div>
                <div className=" z-[2] mb-4">
                    <h3 className="text-3xl font-bold italic space-x-2 mb-4 text-white">Our Team</h3>

                    <p className="text-lg text-white">Informations about our team members</p>
                </div>
            </div>

            <Container className="py-[30px]">


                <p className="text-lg text-center md:w-[65vw] m-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste autem ea saepe assumenda? Nemo cum facere mollitia vitae veritatis?</p>


                <div className="bg-gray-200 p-3 py-6 rounded-md">
                    <h3 className="text-2xl font-semibold space-x-2 mb-6 text-center md:text-left text-black">
                        EXECUTIVE MEMBERS
                    </h3>
                    <div className="grid grid-cols-12 lg:grid-cols-5 gap-3">
                        {teamList
                            .filter((item) => item.priority === 1)
                            .map((member, i) => {
                                return (
                                    <div
                                        className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-1"
                                        key={member.position}
                                    >
                                        <MainCard {...member} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </Container>

            <Container className="py-[30px]">
                <h3 className="text-2xl font-semibold space-x-2 mb-6 text-center md:text-left text-black">
                    COMMITTEE MEMBERS
                </h3>

                <div className="grid grid-cols-12 gap-3">
                    {teamList
                        .filter((item) => item.priority === 2)
                        .map((member, i) => {
                            return (
                                <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <SubCard {...member} />
                                </div>
                            );
                        })}
                </div>
            </Container>
        </>
    );
};

export default Team;
