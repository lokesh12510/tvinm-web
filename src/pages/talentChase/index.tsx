import Button from "@/components/button/Button";
import Container from "@/components/ui/Container";
import { FORM_LINK } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TalentChase = () => {
    return (
        <>
            <Head>
                <title>Talent Chase 2023 - TVINM</title>
                <meta name="title" content="Thambatty Vivekanandar Illaignar Narpani Mandram"></meta>
                <meta name="description" content="Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports."></meta>
            </Head>
            <div className="w-full h-[30vh] md:h-[75vh] bg-slate-400 relative brightness-90">
                <Image
                    src={"/images/talentChase/talent_chase.png"}
                    alt={"talent Chase 23"}
                    fill
                    className="object-fill"
                />
            </div>

            <div className="bg-teal-400 p-2 px-4 py-7 text-center relative overflow-hidden">
                <div className="z-1">

                <div className="absolute w-[400px] h-[700px] left-[-50%] md:left-0">
                    <Vector />
                </div>
                <div className="absolute w-[200px] h-[200px] right-[-50%] md:right-0">
                    <Vector />
                </div>
                </div>
                <div className="z-2 relative">
                <p className=" font-bold uppercase">
                    Thank you for the grand success of TALENT CHASE 2022 <br />
                </p>

                <p className="mb-3">
                    Now we are opening the registration for this year, please register through below link.
                </p>
                <Link target="_blank" href={FORM_LINK} >
                <button className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-600 duration-500  whitespace-nowrap uppercase shadow-xl">
                    Register Now
                </button>
                </Link>
                </div>
            </div>

            <section className="py-[48px] container max-w-screen-lg mx-auto px-3">
                <p className="mb-5 text-justify">
                    TVINM in an attempt to identify and recognise the talents of children in rural areas, conducted an event - Talent Chase, a platform to showcase the hidden skills of young minds. <span className="font-bold italic">Talent Chase 2022</span>  was conducted online and received more than 180 participants from over 60 villages in and around Nilgiris. Various skills like Drawing, Handwritting, Singing, Dancing, Speech and other unique talents of kids were assessed and rewarded with cups, medals and certificates based on their individual performances and motivated them to perform at their best.
                </p>

                <h4 className="font-bold italic text-lg mb-3">Instructions:</h4>

                <div className="mb-5">
                    <p className="text-gray-800 mb-2">
                        1. Participants are requested to click{" "}
                        <Link target="_blank" href={FORM_LINK}>
                            <span className="font-bold text-teal-700 italic underline px-2">Register Now</span>
                        </Link>{" "}
                        and register their names.
                    </p>

                    <p className="text-gray-800 mb-2">
                        {`2. After registration, the participants should pay the amount through the Q.R code which is available below:`}{" "}
                    </p>

                    <div className="bg-teal-200 py-[10px] md:py-[18px] px-2 md:px-5 mb-4 rounded-[7px]">
                        <p className="mb-1">Scan below respective QR Codes to complete the payment of <span className="font-bold"> ₹150 /.</span></p>
                        <p  className="mb-3 italic"> <span className="font-bold"> NOTE : </span>The participants can pay 150 rs per head and can register for all the events.</p>
                        <div className="grid grid-cols-12 gap-4 justify-center items-center">
                            <div className="col-span-12 md:col-span-6   mx-auto">
                                <div className="w-[150px] h-[150px] relative">
                                    <Image src={'/images/talentChase/harshath-qr-code.jpg'} alt="harshath-qr-code"  width={656} height={660}  className="object-contain" />
                                </div>

                                <p className="text-center my-2">Pay to <span className="font-bold uppercase">Harshath</span> </p>
                                <p className="text-center my-1">+91 99436 22690</p>
                                <p className="text-center my-2">Classes <span className="font-bold uppercase">6th - 12th</span> </p>
                            </div>
                            <div className="col-span-12 md:col-span-6   mx-auto">
                                <div className="w-[150px] h-[150px] relative">
                                    <Image src={'/images/talentChase/yakash-qr-code.jpg'} alt="yakash-qr-code" width={673} height={677} className="object-contain" />
                                </div>

                                <p className="text-center my-2">Pay to <span className="font-bold uppercase">Yakash</span> </p>
                                <p className="text-center my-1">+91 63838 10941</p>
                                <p className="text-center my-2"><span className="font-bold uppercase">Pre-KG</span> -  Class <span className="font-bold uppercase">5th</span> </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-800 mb-2">
                        3. After the payment acknowledge the event coordinators and attach the screenshot.
                    </p>

                    <p className="text-gray-800 mb-2">
                        4. After confirmation, the participant will be given a Registration number. Use that number
                        throughout the competition.
                    </p>

                    <p className="text-gray-800 mb-2">
                        5. You will be added to the TALENT CHASE group by the event coordinators.
                    </p>

                    <p className="text-gray-800 mb-2">
                        6. The event time schedule will be announced to the participants once when the registration gets
                        closed .
                    </p>

                    <p className="text-gray-800 mb-2">
                        7. The participants will be added to other separate groups according to the events they choose
                        to participate in.
                    </p>

                    <p className="text-gray-800  mb-2">
                        8. The participants should send their respective works to the allotted phone number.
                    </p>

                    <p className="text-gray-800  mb-2">
                        9. For each event, a separate group will be created and the information will be passed.
                    </p>
                </div>

                <div className="mb-10">
                    <h4 className="font-bold italic text-lg mb-3">Event coordinators:</h4>

                    <p className="mb-2">Akshaya R - 63693 13320</p>
                    <p className="mb-2">Nivetha S - 96266 92367</p>
                </div>


                <div className="text-2xl my-5 border-b-2 font-bold text-center">Glimpse of Talent chase 2022</div>

                <div className="w-full h-[200px]  md:h-[400px] p-1 md:p-1 relative overflow-hidden">
                    <Image
                        fill
                        alt="gallery"
                        className="block h-full w-full rounded-xl object-contain object-top  p-1 md:p-1"
                        src="/images/talentChase/tc-banner.png"
                    />
                </div>

                <div className="flex flex-wrap mb-6">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full md:w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                            <Image
                                fill
                                alt="gallery"
                                className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                src="/images/talentChase/tc22_10.jpg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
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
                        <div className="w-full md:w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                            <Image
                                fill
                                alt="gallery"
                                className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                src="/images/talentChase/tc22_14.jpg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-[300px] p-1 md:p-1 relative overflow-hidden">
                            <Image
                                fill
                                alt="gallery"
                                className="block h-full w-full rounded-xl object-cover object-top  p-1 md:p-1"
                                src="/images/talentChase/tc22_15.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TalentChase;

const Vector = () => {
    return (
        <svg
            className="w-[200px] h-[100px] scale-150"
            width="157"
            height="73"
            viewBox="0 0 157 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_7_537)">
                <path
                    d="M104.822 0.206603C76.0055 0.206603 52.6445 -16.0764 52.6445 -36.1621H104.822V0.206603Z"
                    fill="#1e9d2f"
                />
                <path
                    d="M0.466797 18.3926H26.4237C40.9049 18.3926 52.6444 26.5341 52.6444 36.5769V36.5769H26.6875C12.2058 36.5769 0.466797 28.4354 0.466797 18.3926V18.3926Z"
                    fill="#6ED47C"
                />
                <path
                    d="M52.6445 72.9445V36.5757C52.6445 16.49 76.0055 0.207031 104.822 0.207031V0.207031V36.5757C104.822 56.6615 81.4612 72.9445 52.6445 72.9445V72.9445Z"
                    fill="#6ED47C"
                />
                <path
                    d="M78.7324 36.4503V18.4201C78.7324 8.36139 90.4129 0.207031 104.821 0.207031V0.207031V18.2373C104.821 28.296 93.1408 36.4503 78.7324 36.4503V36.4503Z"
                    fill="#1e9d2f"
                />
                <path
                    d="M0.466797 54.7596C0.466797 44.7167 12.1473 36.5752 26.5556 36.5752V36.5752C40.9639 36.5752 52.6444 44.7167 52.6444 54.7596V54.7596C52.6444 64.8024 40.9639 72.9439 26.5556 72.9439V72.9439C12.1473 72.9439 0.466797 64.8024 0.466797 54.7596V54.7596Z"
                    fill="#FF743C"
                />
                <path
                    d="M12.166 54.5681C12.166 48.9927 18.6508 44.4727 26.6498 44.4727V44.4727C34.6488 44.4727 41.1336 48.9927 41.1336 54.5681V54.5681C41.1336 60.1435 34.6488 64.6636 26.6498 64.6636V64.6636C18.6508 64.6636 12.166 60.1435 12.166 54.5681V54.5681Z"
                    fill="#1e9d2f"
                />
                <path
                    d="M156.824 0.08258V0.08258C128.007 0.08258 104.646 -16.2004 104.646 -36.2861V-36.2861L156.824 -36.2861V0.08258Z"
                    fill="#F0F1F1"
                />
                <path
                    d="M104.822 54.8156C104.822 64.8585 116.503 73 130.911 73V73C145.32 73 157 64.8585 157 54.8156V54.8156C157 44.7728 145.32 36.6313 130.911 36.6313H104.822V54.8156Z"
                    fill="#FFC700"
                />
                <path
                    d="M104.824 46.0378C104.824 51.2323 110.866 55.4434 118.319 55.4434V55.4434C125.771 55.4434 131.812 51.2323 131.812 46.0378V46.0378C131.812 40.843 125.771 36.632 118.319 36.632H104.824V46.0378Z"
                    fill="#FF743C"
                />
                <path
                    d="M130.735 0.0839844C145.144 0.0839844 156.824 8.22548 156.824 18.2683V18.2683C156.824 28.3112 145.144 36.4527 130.735 36.4527V36.4527C116.327 36.4527 104.647 28.3112 104.647 18.2683V18.2683C104.647 8.22548 116.327 0.0839844 130.735 0.0839844V0.0839844Z"
                    fill="#FF743C"
                />
                <path
                    d="M130.999 8.2334C138.998 8.2334 145.482 12.7534 145.482 18.3289V18.3289C145.482 23.9043 138.998 28.4243 130.999 28.4243V28.4243C123 28.4243 116.515 23.9043 116.515 18.3289V18.3289C116.515 12.7534 123 8.2334 130.999 8.2334V8.2334Z"
                    fill="#1e9d2f"
                />
            </g>
            <defs>
                <clipPath id="clip0_7_537">
                    <rect width="157" height="73" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
