import { TBlog, blogList } from "@/components/blog/types";
import Container from "@/components/ui/Container";
import { DateIcon } from "@/icons/Index";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EventDetail = () => {
    const [event, setEvent] = useState<TBlog | undefined>(undefined);

    const [loader, setLoader] = useState(true);

    const { query, push } = useRouter();

    useEffect(() => {
        let hasEvent = blogList.find((item) => item.id === query.id);
        if (hasEvent) {
            setEvent(hasEvent);
        } else {
            query.id && push("/404");
        }
    }, [push, query.id]);

    if (!event) {
        return (
            <Container className="py-[68px] flex items-center justify-center">
                <div
                    className=" h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-teal-700 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </Container>
        );
    }

    return (
        <div>
            <Head>
                <title>{event.title}</title>
            </Head>
            <div className="w-full h-[30vh] md:h-[60vh] bg-slate-400 relative brightness-90">
                <Image src={event.imageURL} alt={event.title} fill className="object-fill"/>
            </div>

            <section className="mx-auto max-w-screen-lg py-[30px] md:py-[68px] px-4 sm:px-6 lg:px-8">

                
                <p className="p-1 bg-teal-500 text-white mb-4 w-fit px-2 rounded-md inline-flex gap-3"><DateIcon/>  {new Intl.DateTimeFormat('en-US').format(event.date)}</p>

                <h4 className="text-lg md:text-3xl font-bold space-x-2 mb-5">{event.title}</h4>    


                <p className="mb-6 text-sm md:text-lg text-gray-800 text-justify">{event.content}</p>
                
            </section>
        </div>
    );
};

export default EventDetail;
