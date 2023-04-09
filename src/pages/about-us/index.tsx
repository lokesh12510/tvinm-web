import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <>
            <div className="w-full h-[220px] md:h-[300px] relative flex items-center flex-col justify-center text-center overflow-hidden">
                <div className="absolute w-[140%] h-full  bg-[url('/images/about-bg.svg')] bg-cover rounded-b-[50%] pt-[20px] md:pt-[40px]"></div>
                <div className=" z-[2] mb-4">
                    <h3 className="text-3xl font-bold italic space-x-2 mb-4 text-white">About Us</h3>

                    <p className="text-lg text-white">Overview of our society club</p>
                </div>
            </div>
            <section className="mx-auto container max-w-screen-lg px-3 py-[40px]">
                <p className="mb-7">
                    Thambatty Vivekanandar Illaignar Narpani Mandram is a society club which was formed on 27 December
                    2019 at Thambatty Village with a strong motive to develop the village and to provide every possible
                    services to the people. It is officially registered under the Tamil Nadu Societies Registration Act, 1975 (Tamil Nadu Act 27 of 1975).&nbsp;
                    <strong className="bold">
                        Thambatty Vivekanandar Illaignar Narpani Mandram is affiliated with Nehru Yuva Kendra, The
                        Nilgiris District which is under Government of India- Ministry of Youth Affairs and Sports.
                    </strong>
                    &nbsp; Starting with less than 15 members, the rise in count has been tremendous during the past
                    years and now with active members of 50 and above. The members of TVINM have opportunities to
                    participate in various activities relating to community development. In addition to that, the
                    society club also helps in building leadership qualities in every active members and motivates them
                    to be a good leader. TVINM mainly focuses on developing the community with the support of the entire
                    team. This society club has been a bridge which is built for a safe passage for people from their
                    present life to a bright future. The club organizes many indoor and outdoor activities for the young
                    kids to showcase their talents and is being a platform to develop their talents.
                </p>

                <h3 className="font-bold mb-4 text-3xl">OUR HISTORY</h3>
                <h3 className="font-bold mb-4 text-lg">DECEMBER 27, 2019- Start of Society Club</h3>
                <p className="mb-3">
                    A society club under the name of “Vivekanandar Illaignar Narpani Mandram Thambatty” was formed by
                    our village seniors and they did a great job. In order to continue the same services we decided to
                    start a new club under the name of “Thambatty Vivekanandar Illaignar Narpani Mandram”. We requested
                    a room and got permission from our Village Head B.Iyer to use it for our society club. We received
                    an affiliation certificate from the Nehru Yuva Kendra- The Nilgiris.
                </p>
                <div className="md:w-[50vw] m-auto h-[170px] md:h-[300px] relative mb-6">
                    <Image src={"/images/about/tvinm-certificate.jpg"} alt="tvinm certification" fill />
                </div>
                <p className="mb-3">
                    With 23 active members we started this society club. Along with the village kids, we decided to
                    clean our village ground which was near Thambatty Mariamman Temple. The allotted room was used to
                    conduct daily meetings and everyone participated. Everyone was given the opportunity to talk and
                    share their opinion. Out of 23 active members, 5 people were given the title of President,
                    Secretary, Treasurer, Vice-President and Vice-Secretary.{" "}
                </p>
                <h3 className="font-bold mb-4 text-lg">FEBRUARY 24, 2020- Registration</h3>
                <p className="mb-3">
                    On this day, our society club “Thambatty Vivekanandar Illaignar Narpani Mandram” was officially
                    registered under the Tamil Nadu Societies Registration Act, 1975 (Tamil Nadu Act 27 of 1975) and we
                    received the Certificate.
                </p>
                <p>Registration No.: SRG/Ooty/18/2020</p>
                <p>Date of Registration: 24th February, 2020</p>
                {/* ------------------------------------------------------ */}
                <h3 className="font-bold my-4 text-3xl">2019</h3>
                <p className="mb-3">
                    December 27, 2019- Start of Society club and received an affiliation certificate from Nehru Yuva
                    Kendra, The Nilgiris- Government of India.
                </p>
                <p className="mb-3">
                    December 28, 2019- Competition 1- Organized a few competitions for Kids. (Chess, Carrom, Badminton)
                </p>
                <h3 className="font-bold my-4 text-3xl">2020</h3>
                <p className="mb-3">
                    January 18, 2020- Started Plastic Free society camp by collecting plastic wastes in and around the
                    village.
                </p>
                <p className="mb-3">{`February 24, 2020- Our society club "THAMBATTY VIVEKANANDAR ILLAIGNAR NARPANI MANDRAM" was officially registered under the Tamil Nadu Societies Registration Act, 1975 (Tamil Nadu Act 27 of 1975).`}</p>
                <p className="mb-3">{`May 31, 2020- Competition 2- Organized second set of Competitions. (Drawing, Dance, Essay, Handwriting, Quiz, Speech, Spell Bee, Singing)
`}</p>
                <p className="mb-3">{`June 12, 2020- Distributed Sports Jerseys for the village kids. 
`}</p>
                <p className="mb-3">{`July 4, 2020- Competition 3- Organized third set of competitions. (Carrom, Chess, Badminton)
`}</p>
                <p className="mb-3">{`August 30, 2020- Fit India Youth Club program was organized.
`}</p>
                <p className="mb-3">{`November 16, 2020- Village Ground renovation project was started. 
`}</p>
                <p className="mb-3">{`November 26, 2020- Constitution day program was organized with the help of NYK providing us with fund. 
`}</p>
                <p className="mb-3">{`December 2, 2020- Thambatty Football League-4 was organized by TVINM.
`}</p>
                <h3 className="font-bold my-4 text-3xl">2021</h3>
                <p className="mb-3">{`January 13, 2021- Competition 4- Organized fourth set of Competitions. (Speech, Essay, Thirukural, Singing, Dancing, Quiz, Drawing/Coloring, Monoact, Handwriting, Poem, Rangoli, Chess, Badminton, Carrom, Running)
`}</p>
                <p className="mb-3">{`May 2021- Formed a special team during the Covid times to provide essentials at doorstep for the village people.
`}</p>
                <p className="mb-3">
                    June 10, 2021- Tree plantation activity. Planted tree saplings in and around the Village.{" "}
                </p>
                <p className="mb-3">June 21, 2021- Yoga day program was organized at our village. </p>
                <p className="mb-3">
                    August 29, 2021- National Sports day was celebrated at our village with kids participating in it.{" "}
                </p>
                <p className="mb-3">
                    October 2021- Fit India Freedom Run 2.0 was organized with the help of NYK providing us with fund.
                </p>
                <h3 className="font-bold my-4 text-3xl">2022</h3>
                <p className="mb-3">
                    January 1, 2022- TVINM App launching Event and the release of Village History Documentary.{" "}
                </p>
                <p className="mb-3">
                    January 22, 2022- Disposal of over 500kgs plastics which were collected over the past years.
                </p>
                <p className="mb-3">
                    February 20, 2022- Rs. 10000 was received from “Sri Sathya Sai Maruthi Seva Charitable Trust” as a
                    honourable gift.
                </p>
                <p className="mb-3">{`March 27, 2022- "Social Worker Award'' was honoured to our Club by BADUGAR KALACHARA PADHUKAPPU IYAKKAM.`}</p>
                <p className="mb-3">March 30, 2022- Sports materials were received from NYK. </p>
                <p className="mb-3">
                    {" "}
                    May 29, 2022- Honoring our former village Head B. Iyer for his continuous services over the past
                    years.{" "}
                </p>
                <p className="mb-3">
                    June 19, 2022- Talent Chase- An online competition prize distribution program was organized in ooty
                    at the Hoticulture Complex with chief guest S. Shibhila Mary, Joint Director of Horticulture (i/c).
                    180+ students participated from 60+ villages.
                </p>
                <p className="mb-3">
                    June 21, 2022- Yoga Day was conducted with the help of NYK providing us with fund.{" "}
                </p>
                <p className="mb-3">{`June 26, 2022- An appreciation program was arranged in our village by "BADUGAR KALACHARA PADHUKAPPU IYAKKAM" to appreciate our grand success of Talent Chase competition.`}</p>
                <p className="mb-3">
                    November 13, 2022- Clean India 2.0 was conducted with the help of NYK providing us with fund.{" "}
                </p>
                <h3 className="font-bold my-4 text-3xl">2023</h3>
                <p className="mb-3">
                    January 15, 2023- Provision of needful things to the Mentally and Physically Challenged Kids staying
                    at Rotary Ashiya School, Ooty.{" "}
                </p>
                <p className="mb-3">
                    January 2023- Competition 5- National Youth day was celebrated with the help of NYK providing us
                    with fund by conducting a few competitions. (Carrom, Chess, Badminton, Football).
                </p>
            </section>
        </>
    );
};

export default AboutUs;
