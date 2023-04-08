import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const TalentChase = () => {
    return (
        <>
            <div className="w-full h-[30vh] md:h-[75vh] bg-slate-400 relative brightness-90">
                <Image
                    src={"/images/talentChase/talent_chase.png"}
                    alt={"talent Chase 23"}
                    fill
                    className="object-fill"
                />
            </div>

            <Container className="py-[68px]">
                <p className="mb-5">
                    &nbsp;&nbsp;&nbsp;
                    {`TVINM in an attempt to identify and recognise the talents of children in rural areas, conducted an event - 'Talent Chase', a platform to showcase the hidden skills of young minds. The competition was conducted online and received more than 180 participants from over 60 villages in and around Nilgiris. Various skills like Drawing, Handwritting, Singing, Dancing, Speach and other unique talents of kids were assessed and rewarded with cups, medals and certificates based on their individual performances and motivate them to perform at their best.`}
                </p>

                <div className="w-full h-[400px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-contain object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc-banner.png"
                                />
                            </div>

                <div className="flex flex-wrap mb-6">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                   fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_10.jpg"
                                />
                            </div>
                            <div className="w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_11.jpg"
          
                                />
                            </div>
                            <div className="w-full h-[300px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_12.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex w-1/2 h-[300px] flex-wrap">
                            <div className="w-full h-[300px] p-1 md:p-1 relative overflow-hidden">
                            <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_13.jpg"
                                />
                            </div>
                            <div className="w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_14.jpg"
                                />
                            </div>
                            <div className="w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                                <Image
                                    fill
                                    alt="gallery"
                                    className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                    src="/images/talentChase/tc22_15.jpg"
                                />
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default TalentChase;
