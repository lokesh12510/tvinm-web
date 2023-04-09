import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icons/Index";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us - TVINM</title>
            </Head>
            <div className="w-full h-[30vh] md:h-[60vh] bg-slate-400 relative brightness-90">
                <Image src="/images/contact-bg.png" alt="contact banner" fill className="object-fill" />
            </div>

            <section className="mx-auto container max-w-screen-lg px-3 py-[40px]">
                <h4 className="font-bold text-2xl italic mb-3">Contact Us</h4>

                <p className="my-4">
                    We are currently working on the betterment of our society by providing every possible services. You
                    can comment your feedback and suggestions below.
                </p>

                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-7">
                        <h6 className="font-bold text-lg mb-1 inline-flex items-center gap-3 text-teal-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            Address
                        </h6>
                        <p className="mb-5">Thambatty village, Nunthala post, Ooty, The Nilgiris- 643003</p>
                        <h6 className="font-bold text-lg mb-1 inline-flex items-center gap-3 text-teal-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Phone Number
                        </h6>
                        <p className="mb-5">+91 9786766751, +91 9787850583, +91 9524449647</p>

                        <h4 className="font-bold text-2xl italic mb-3">Follow us on</h4>
                        <div className="mb-4">
                            <Link target="_blank" href={"https://instagram.com/thambatty_vinm?utm_medium=copy_link"}>
                                <p className="inline-flex gap-3 text-lg items-center italic hover:text-teal-700 cursor-pointer">
                                    <InstagramIcon />
                                    thambatty_vinm
                                </p>
                            </Link>
                        </div>
                        <div className="mb-4">
                            <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100076436983948"}>
                                <p className="inline-flex gap-3 text-lg items-center italic hover:text-teal-700 cursor-pointer">
                                    <FacebookIcon />
                                    thambatty_vinm
                                </p>
                            </Link>
                        </div>
                        <div className="mb-6">
                            <Link target="_blank" href={"https://youtube.com/channel/UCnTY6RgbP4dvKU9c8I5LKXQ"}>
                                <p className="inline-flex gap-3 text-lg items-center italic hover:text-teal-700 cursor-pointer">
                                    <YoutubeIcon />
                                    Thambatty Kunnavae
                                </p>
                            </Link>
                        </div>

                        <div className="w-full bg-teal-300 p-2 px-4 rounded-[10px] text-center relative">
                            <div className="md:absolute flex w-full h-[70%] items-center justify-center md:justify-start mb-2">
                                <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M29.7212 15.4368L29.7212 15.4379C29.7345 18.3319 28.8881 21.1646 27.2893 23.5769C25.6905 25.9892 23.4113 27.8723 20.7408 28.9875C18.0703 30.1027 15.1287 30.3997 12.2892 29.8409C9.44967 29.282 6.84006 27.8925 4.79132 25.8485C2.74258 23.8045 1.34701 21.198 0.781585 18.3598C0.216158 15.5216 0.50635 12.5794 1.61536 9.90627C2.72437 7.23319 4.60224 4.94966 7.01082 3.34528C9.4194 1.7409 12.2502 0.887932 15.1442 0.894571H15.1453C19.0053 0.894561 22.7076 2.42562 25.4401 5.15185C28.1727 7.87807 29.7123 11.5769 29.7212 15.4368Z"
                                        stroke="#134e4a"
                                    />
                                    <path
                                        d="M22.6633 10.2824H7.62225L15.1428 15.4006L22.6633 10.2824Z"
                                        fill="#134e4a"
                                    />
                                    <path
                                        d="M15.1437 18.3944L6.36981 12.4407V22.2243H23.8829V12.4407L15.1437 18.3944Z"
                                        fill="#134e4a"
                                    />
                                </svg>
                            </div>
                            For further details or any queries please email us to{" "}
                            <Link href={"mailto:thambattyinm@gmail.com"} target="_blank">
                                <span className="font-bold text-teal-900">thambattyinm@gmail.com</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <div className="w-full h-[400px] relative">
                            <Image
                                src="/images/contact-banner.svg"
                                alt="contact banner"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
