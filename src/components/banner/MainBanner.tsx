import React from "react";
import Button from "../button/Button";
import Container from "../ui/Container";
import Image from "next/image";

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
              Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated
              with Nehru Yuva Kendra, The Nilgiris District which is under
              Government of India- Ministry of Youth Affairs and Sports. After
              affiliation the Youth Club would become eligible to participate,
              partner and access the services provided by NYKS. Once a Youth
              Club is affiliated with NYK, the magnitude of programmes available
              for the Youth Club increases and they can be part and parcel of
              the NYK sponsored activities. Registered Youth Clubs earn trust of
              the public and Governments. Registered Youth Clubs are more
              credible in the eyes of the public and Governments.
            </p>

            <Button>About us</Button>
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
