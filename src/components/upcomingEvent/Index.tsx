import React from "react";
import Container from "../ui/Container";
import { NextIcon, SparkleIcon } from "@/icons/Index";
import Image from "next/image";
import Button from "../button/Button";
import { competitionList } from "./types";

const UpcomingEvent = () => {
    return (
        <Container className="bg-teal-600 pb-[100px]">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-7 text-2xl my-[30px] md:my-0">
                    <div className="mb-2 text-yellow-500">
                        <SparkleIcon />
                    </div>
                    <h1 className="underline text-yellow-500 mb-4 text-2xl md:text-4xl">Ongoing event</h1>
                    <p className="text-white text-[1.3rem] leading-7 mb-3">
                        <span className="font-bold">Talent Chase 2</span> {`is an online competition conducted for the kids and school students. Talent Chase is a great platform to showcase the kid's talents to this world. A participant certificate will be provided for the participants and the winners will be awarded with cash prizes, certificates, medals and trophies.`}
                    </p>

                    <p className="text-white font-bold italic text-2xl mb-4">{`"Showcase your talents and grab the prizes".`}</p>

                    <h6 className="text-white px-4 py-1 border-b-4 w-fit mb-4">Events List</h6>
            
                    <div className="mb-4">
                    {competitionList.map((item, i) => {
                        return (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-start mb-[4px]">
                                <div className="hidden md:block text-yellow-500">
                                    <NextIcon />
                                </div>

                                <p className="mx-3 text-white text-xl md:text-2xl">{item}</p>
                            </div>
                        );
                    })}
                    </div>

                    <Button className="rounded-[10px] bg-yellow-500 text-black hover:bg-yellow-600 shadow-sm shadow-yellow-300">
                        Register Now
                    </Button>
                </div>
                <div className="col-span-12 md:col-span-5 justify-self-end">
                    <div className="w-[100%] relative h-[100%]">
                        <Image
                            src={"/images/events.png"}
                            alt="upcoming event"
                            width={600}
                            height={300}
                            style={{ objectFit: "contain", position: "relative" }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UpcomingEvent;
