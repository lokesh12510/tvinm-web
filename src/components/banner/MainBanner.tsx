import React from "react";
import Button from "../button/Button";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <Container className="pt-[98px] md:overflow-hidden pb-[30px] md:pb-0 md:py-[68px] relative md:h-full md:min-h-[120vh]  bg-blue-900 md:bg-teal-600">
        <div className="hidden md:block absolute w-[100vw] h-[100%] top-[-100px] left-0">
          <Image
            src={"/images/bg.svg"}
            alt="bg"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* <div className="absolute md:p-[22rem] lg:p-[26rem] bg-slate-300 rounded-full lg:top-[-15%] lg:right-[-15%] md:top-[-15%] md:right-[-30%]"></div> */}

        <div className="grid grid-cols-12 gap-4 h-full items-center relative md:mt-[15vh]">
          <div className="col-span-12 md:col-span-7 text-center md:text-left">
            <h1 className="md:text-4xl font-bold pb-9 text-white">
              THAMBATTY VIVEKANANDAR ILLAIGNAR NARPANI MANDRAM
            </h1>
            <p className="mb-4 text-gray-200 w-full md:w-[70%] ">
            TVINM is a society club which was formed on 27 December 2019 at Thambatty Village with a strong motive to develop the village and to provide every possible services to the people. It was officially registered under the Tamil Nadu Societies Registration Act, 1975 (Tamil Nadu Act 27 of 1975).
            </p>
            <Link href="/about-us">
              <Button>About us</Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="relative w-full h-[300px] md:hidden ">
        <Image
          src={"/images/group-pic.jpg"}
          alt="bg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default MainBanner;
