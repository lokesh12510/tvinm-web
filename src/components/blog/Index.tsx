import React from "react";
import Container from "../ui/Container";
import BlogCard from "./BlogCard";
import { blogList } from "./types";
import Link from "next/link";

const BlogSection = () => {
    return (
        <Container className="py-[30px] md:py-[60px]">
            <div className="flex flex-col w-full items-center justify-center mb-8">
                <h5 className="font-bold text-3xl mb-3 text-teal-700">EVENTS</h5>
                <p className="text-lg">Take A Look At Our Latest EVENTS</p>
            </div>

            <div className="grid grid-cols-12 gap-7">
                {blogList
                    .filter((item) => item.featured)
                    .map((event, i) => {
                        return (
                            <div key={event.id} className="col-span-12 md:col-span-2 lg:col-span-4">
                                <Link href={`/events/${event.id}`}>
                                    <BlogCard {...event} />
                                </Link>
                            </div>
                        );
                    })}
                <div className="col-span-12 md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center">
                    <p className="mb-3">Take A Look At Our EVENTS</p>
                    <Link href={"/events"}>
                        <button className="bg-white text-teal-600 border border-teal-700 hover:text-teal-900 uppercase  py-2 px-6 rounded-full">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default BlogSection;
