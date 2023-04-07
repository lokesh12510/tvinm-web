import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Container className="bg-[#233d8f] py-[20px] flex items-center flex-col gap-5 justify-center ">
      <Image
        src={"/images/logo-light.svg"}
        width={132}
        height={132}
        alt="logo"
        className="my-5"
      />

      {/* <h6 className="text-white text-lg text-center">Follow us on</h6> */}

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-5">
          <h1 className="text-white text-2xl mb-3 font-semibold text-center md:text-left">
            THAMBATTY VIVEKANANDAR ILLAIGNAR NARPANI MANDRAM
          </h1>
          <h1 className="text-lg text-gray-200 mb-3 text-center md:text-left">
            Thambatty Vivekanandar Illaignar Narpani Mandram is a society club
            which was formed on 27 December 2019 at Thambatty Village with a
            strong motive to develop the village and to provide every possible
            services to the people.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 mx-auto ">
          <h4 className="text-2xl text-white mb-6 uppercase font-semibold border-b-2 text-center md:text-left">
            Links
          </h4>
          <ul className="text-lg text-gray-200 text-center md:text-left">
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Talent chase</li>
            <li>Our team</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3">
          <h4 className="text-center  text-2xl text-white mb-6 uppercase font-semibold border-b-2">
            Follow us
          </h4>
          <ul className="text-center  text-lg text-gray-200">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
