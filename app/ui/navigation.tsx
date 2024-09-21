"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPark from "@/public/park-logo.svg";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      // style={{ backgroundImage: `url(${navigationBackgroundImage.src})` }}
      className="lg:bg-none xl:bg-[url('/nav-bg-desktop.png')] xl:bg-cover bg-no-repeat bg-center"
    >
      <div className="px-5 xl:px-[45px] pt-5 xl:pt-[34px] pb-[42px] flex items-center justify-between xl:justify-evenly">
        <div className="hidden xl:flex items-center justify-center gap-16 text-white text-base font-bold">
          <Link className="navbar-link" href={"/blogs"}>
            Wydarzenia
          </Link>
          <Link className="navbar-link" href={"/"}>
            Nowości
          </Link>
          <Link className="navbar-link" href={"/"}>
            Rzeka Białucha
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={logoPark.src}
              width={75}
              height={77}
              alt="Logo Olsza Park Nad Białuchą"
              className="w-[40px] h-[40px] xl:w-[75px] xl:h-[77px] box-shadow rounded-full"
            />
          </Link>
        </div>
        <div className="hidden xl:flex items-center justify-center gap-16 text-white text-base font-bold">
          <Link className="navbar-link" href={"/"}>
            Atrakcje
          </Link>
          <Link className="navbar-link" href={"/"}>
            Realizacja
          </Link>
          <Link className="navbar-link" href={"/"}>
            Inwestycja
          </Link>
        </div>
        <div onClick={toggleMenu} className="flex xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            viewBox="0 0 47 36"
            fill="none"
          >
            <rect width="47" height="6" rx="3" fill="#AEE29C" />
            <rect x="18" y="15" width="29" height="6" rx="3" fill="#AEE29C" />
            <rect y="30" width="47" height="6" rx="3" fill="#AEE29C" />
          </svg>
        </div>
        <motion.div
          initial={{ y: "-100%" }} // Start off-screen
          animate={isOpen ? { y: 0 } : { y: "-100%" }} // Slide down when open
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animate the transition
          className="fixed top-0 left-0 w-full h-full z-50 bg-white overflow-x-hidden overflow-y-hidden"
        >
          <div className="grid place-items-center w-full h-full relative">
            <Link
              href={"/"}
              onClick={toggleMenu}
              className="absolute top-5 left-5 text-[#AEE29C] font-bold text-3xl"
            >
              <Image
                src={logoPark.src}
                width={45}
                height={45}
                alt="Logo Olsza Park Nad Białuchą"
                className="box-shadow rounded-full"
              />
            </Link>
            <div
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-[#AEE29C] font-bold text-3xl"
            >
              x
            </div>
            <div className="flex flex-col gap-5 items-center justify-center text-xl underline underline-offset-4 decoration-2 text-[#00000099]">
              <Link className="" href={"/blogs"}>
                Wydarzenia
              </Link>
              <Link className="navbar-link" href={"/"}>
                Nowości
              </Link>
              <Link className="navbar-link" href={"/"}>
                Rzeka Białucha
              </Link>
              <Link className="navbar-link" href={"/"}>
                Atrakcje
              </Link>
              <Link className="navbar-link" href={"/"}>
                Realizacja
              </Link>
              <Link className="navbar-link" href={"/"}>
                Inwestycja
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
