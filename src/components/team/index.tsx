import React from "react";
import Container from "../ui/Container";
import { teamList } from "./types";
import MainCard from "./MainCard";
import SubCard from "./SubCard";

const TeamSection = () => {
    return (
        <>
            <section className="py-[30px] container max-w-screen-lg mx-auto px-3">
                <p className="text-lg text-center md:w-[65vw] m-auto mb-6">
                Our team consists of 5 Executive Members, 15 Committee Members and 30 active Members. Committee Heads and Leaders will be reporting to the Executive Members.
                </p>

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
            </section>

            <section className="py-[30px] container max-w-screen-lg mx-auto px-3">
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
            </section>
        </>
    );
};

export default TeamSection;
