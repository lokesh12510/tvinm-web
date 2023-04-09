import BlogCard from "@/components/blog/BlogCard";
import { blogList } from "@/components/blog/types";
import Container from "@/components/ui/Container";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Events = () => {
    return (
        <>
            <Head>
                <title>Events - TVINM</title>
                <meta name="title" content="Thambatty Vivekanandar Illaignar Narpani Mandram"></meta>
                <meta name="description" content="Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports."></meta>
            </Head>
            <div className="w-full h-[220px] md:h-[300px] relative flex items-center flex-col justify-center text-center overflow-hidden">
                <div className="absolute w-[140%] h-full  bg-[url('/images/event-bg.svg')] bg-cover rounded-b-[50%] pt-[20px] md:pt-[40px]"></div>
                <div className=" z-[2] mb-4">
                    <h3 className="text-3xl font-bold italic space-x-2 mb-4 text-white">EVENTS</h3>

                    <p className="text-lg">Take A Look At Our Latest EVENTS</p>
                </div>
            </div>

            <section className="py-[30px] container max-w-screen-lg mx-auto px-3">


            <p className="text-lg text-center md:w-[65vw] m-auto mb-6">We conduct events every year and below listed are a few of those. 5 offline competitions and 1 Online competitions have been conducted as of Jan 2023.</p>


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
            </section>
        </>
    );
};

export default Events;
