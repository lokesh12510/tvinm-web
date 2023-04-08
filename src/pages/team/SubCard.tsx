import Image from "next/image";
import React from "react";
import { Team } from "./types";

const SubCard = (props:Team) => {

    const { name, position, imageURL } = props;
    return (
        <div className="w-full flex items-center justify-between gap-3 bg-slate-200 p-2 md:p-3 hover:shadow-md rounded-xl">
            <div className="w-[80px] h-[80px] relative overflow-hidden rounded-md md:rounded-xl">
                <Image src={imageURL} alt="members" fill className="object-contain" />
            </div>
            <div className="w-full p-2 md:p-3">
                <h6 className="text-lg md:text-2xl font-bold mb-1">{name}</h6>
                <p className="text-sm md:text-md text-gray-700">{position}</p>
            </div>
        </div>
    );
};

export default SubCard;
