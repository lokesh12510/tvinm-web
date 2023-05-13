import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const classes = {
    link: "border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-yellow-500 cursor-pointer mb-3",
};

const Footer = () => {
    return (
      <>
        <Container className="bg-[#233d8f] py-[20px] flex items-center flex-col gap-5 justify-center ">
            <Image src={"/images/logo-light.svg"} width={132} height={132} alt="logo" className="my-5" />

            {/* <h6 className="text-white text-lg text-center">Follow us on</h6> */}

            <div className="grid grid-cols-12 gap-3 transition-all ease-in duration-75">
                <div className="col-span-12 md:col-span-5">
                    <h1 className="text-white text-2xl mb-3 font-semibold space-x-2 text-center md:text-left font-[poppins]">
                        THAMBATTY VIVEKANANDAR ILLAIGNAR NARPANI MANDRAM
                    </h1>
                    <h1 className="text-lg text-gray-200 mb-3 text-center md:text-left">
                        Thambatty Vivekanandar Illaignar Narpani Mandram is a society club which was formed on 27
                        December 2019 at Thambatty Village with a strong motive to develop the village and to provide
                        every possible services to the people.
                    </h1>
                </div>
                <div className="col-span-12 md:col-span-4 mx-auto ">
                    <h4 className="text-2xl text-white mb-6 uppercase font-semibold text-center md:text-left">Links</h4>
                    <ul className="text-lg text-gray-200 text-center md:text-left">
                        <Link href={"/"}>
                            <li className={classes.link}>Home</li>
                        </Link>
                        <Link href={"/about-us"}>
                            <li className={classes.link}>About</li>
                        </Link>
                        <Link href={"/events"}>
                            <li className={classes.link}>Events</li>
                        </Link>
                        <Link href={"/talentChase"}>
                            <li className={classes.link}>Talent Chase</li>
                        </Link>
                        <Link href={"/team"}>
                            <li className={classes.link}>Our Team</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className={classes.link}>Contact Us</li>
                        </Link>
                        <Link href={"/privacy-policy"}>
                            <li className={classes.link}>Privacy Policy</li>
                        </Link>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-3  mx-auto ">
                    <h4 className="text-center md:text-left text-2xl text-white mb-6 uppercase font-semibold">Follow us</h4>
                    <ul className="text-center md:text-left text-lg text-gray-200">
                        <Link target="_blank" href={"https://instagram.com/thambatty_vinm?utm_medium=copy_link"}>
                            <li className={classes.link}>Instagram</li>
                        </Link>
                        <Link  target="_blank" href={"https://www.facebook.com/profile.php?id=100076436983948"}>
                            <li className={classes.link}>Facebook</li>
                        </Link>
                        <Link  target="_blank" href={"https://youtube.com/channel/UCnTY6RgbP4dvKU9c8I5LKXQ"}>
                            <li className={classes.link}>Youtube</li>
                        </Link>
                        <Link  target="_blank" href={"mailto:thambattyinm@gmail.com"}>
                            <li className={classes.link}>Email</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </Container>

        <div className="bg-black p-1 px-4 text-center">
          <p className="text-white">&copy; TVINM 2023</p>
        </div>
      </>
    );
};

export default Footer;
