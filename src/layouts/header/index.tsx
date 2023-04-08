import Button from "@/components/button/Button";
import Container from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/icons/Index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/", main: true },
    { name: "EVENTS", link: "/events" },
    { name: "TALENT CHASE", link: "/talentChase" },
    { name: "OUR TEAM", link: "/team" },
  ];
  let [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(()=>{
    open && setOpen(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[router.pathname])

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 ${
        scrolled &&
        "transistion-background duration-75 ease shadow-md backdrop-blur-sm bg-blue-100/80"
      } transistion-background duration-75 ease`}
    >
      <Container className="md:flex items-center justify-between py-3 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Image
            src={`/images/logo-${scrolled ? "dark" : "light"}.svg`}
            alt="logo"
            width={48}
            height={48}
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`text-2xl absolute right-8 top-4 cursor-pointer md:hidden ${scrolled ? 'text-black':'text-white'} `}
        >
          <MenuIcon className="h-9 w-9" />
        </div>

        <div
          className={`md:flex md:items-center md:pb-0 p-12 md:p-0 shadow-md md:shadow-none absolute md:static md:z-auto bg-white md:bg-transparent z-2 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all md:transition-none duration-500 ease-in ${
            open ? "top-0 " : "top-[-490px]"
          }`}
        >
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <CloseIcon className="h-9 w-9" />
          </div>

          <ul className="md:flex md:items-center md:pb-0">
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className={`text-black  hover:text-yellow-400 w-full ${
                  scrolled ? "md:text-black" : "md:text-white"
                }`}
              >
                <li
                  className={`md:ml-8 text-xl md:my-0 my-7 whitespace-nowrap ${
                    router.pathname === link.link && "font-bold text-yellow-400"
                  }`}
                >
                  {link.name}
                </li>
              </a>
            ))}
          </ul>
          <div className="block md:hidden">
            <Link href={"/contact"}>
              <Button className="bg-yellow-500 text-black shadow-lg hover:bg-yellow-500">
                JOIN US
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href={"/contact"}>
            <Button className="bg-yellow-500 text-black shadow-lg hover:bg-yellow-500">
              JOIN US
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
