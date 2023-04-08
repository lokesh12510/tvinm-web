import Image from "next/image";
import React from "react";
import { Team } from "./types";

const MainCard = (props: Team) => {
    const { name, position, imageURL } = props;

    return (
        <div className="md:max-w-[220px] pb-2 bg-teal-600 rounded-[10px] overflow-hidden shadow-xl hover:shadow-white hover:shadow-sm">
            <div className="relative w-full h-[160px] md:h-[250px]">
                <Image src={imageURL} className="object-fill" alt="members" fill />
            </div>
            <div className="p-1 px-3">
                <p className="font-bold text-left text-sm md:text-lg text-white uppercase">{name}</p>
                <p className=" text-left text-xs md:text-lg text-gray-200">{position}</p>
            </div>
        </div>
    );
};

export default MainCard;
