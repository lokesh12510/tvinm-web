import BlogCard from "@/components/blog/BlogCard";
import { blogList } from "@/components/blog/types";
import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

const Events = () => {
    return (
        <>
            <div className="w-full h-[220px] md:h-[300px] relative flex items-center flex-col justify-center text-center overflow-hidden">
                <div className="absolute w-[140%] h-full  bg-[url('/images/event-bg.svg')] bg-cover rounded-b-[50%] pt-[20px] md:pt-[40px]"></div>
                <div className=" z-[2] mb-4">
                    <h3 className="text-3xl font-bold italic space-x-2 mb-4 text-white">EVENTS</h3>

                    <p className="text-lg">Take A Look At Our Latest EVENTS</p>
                </div>
            </div>

            <Container className="py-[60px]">


            <p className="text-lg text-center md:w-[65vw] m-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt maiores voluptate harum tenetur! Provident nostrum modi aliquid enim ipsa.</p>


                <div className="grid grid-cols-12 gap-7">
                    {blogList.map((event, i) => {
                        return (
                            <div key={event.id} className="col-span-12 md:col-span-6">
                              <Link href={`/events/${event.id}`}>
                                <BlogCard {...event} />
                              </Link>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
};

export default Events;
