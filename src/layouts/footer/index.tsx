import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Container className="bg-black py-[20px] flex items-center gap-5 justify-center">
      <Image src={"/images/logo-light.svg"} width={34} height={34} alt="logo" />

      <h1 className="text-white text-2xl">TVINM</h1>
    </Container>
  );
};

export default Footer;
