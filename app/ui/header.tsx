import Image from "next/image";
import React from "react";
import headerImage from "@/public/headerImage.png";
import headerIlustrationOne from "@/public/headerIlustraionOne.png";
import headerIlustrationTwo from "@/public/headerIlustraionTwo.png";
import arrowDown from "@/public/arrow-down.svg";

const Header = () => {
  return (
    <header className="px-5 xl:px-[45px] pt-[30px] pb-[60px] xl:pb-[110px]">
      <div className="relative flex flex-col order-1">
        <div className="xl:absolute top-[44px] right-0">
          <div className="pt-[30px] pb-[34px] px-5 xl:px-[45px]  font-bold text-[#F9F9F1] bg-[#AEE29C] z-20 rounded-[20px] relative box-shadow">
            <h1 className="text-4xl xl:text-[50px] leading-[1.1]">
              Olsza Park <br />
              Nad Białuchą
            </h1>
            <p className="absolute bottom-0 right-0 text-[12px] p-3 px-5">
              - Rok zalozenia: 2023
            </p>
          </div>
          <div className="mt-5 mb-5 xl:mb-0 w-full xl:w-[290px] ml-auto text-base text-[#8F8F8F] ">
            <p>
              Inwestor :{" "}
              <span className="text-[#AEE29C] font-bold">
                Zarząd Zieleni w Krakowie
              </span>{" "}
            </p>
            <p className="mt-[10px]">
              Wnioskodawca :{" "}
              <a
                href="https://kwiatek.krakow.pl/"
                target="_blank"
                className="text-[#AEE29C] underline font-bold underline-offset-4 decoration-2"
              >
                Karol Kwiatek
              </a>{" "}
            </p>
          </div>
          <div className="hidden xl:block mt-5 w-full max-w-[290px] xl:w-[290px] h-[352px] rounded-[20px] xl:ml-auto text-base text-[#8F8F8F] bg-white box-shadow">
            <div className="pt-[30px] px-5">
              <h2 className="text-[#BE7837] font-bold text-lg mb-5">
                Olsza Park Nad Białuchą
              </h2>
              <p className="text-base mb-5 text-[#8F8F8F]">
                Zielona oaza położona w malowniczej dzielnicy Olsza, w pobliżu
                rzeki Białucha.
              </p>
              <div className="w-full flex items-center justify-between mb-3">
                <Image
                  src={headerIlustrationOne.src}
                  width={115}
                  height={115}
                  alt="Ilustracja prezentujaca atrakcje w parku cześć pierwsza"
                  className="box-shadow rounded-[20px]"
                />
                <Image
                  src={headerIlustrationTwo.src}
                  width={115}
                  height={115}
                  alt="Ilustracja prezentujaca atrakcje w parku cześć druga"
                  className="box-shadow rounded-[20px]"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={arrowDown.src}
                  width={20}
                  height={20}
                  alt="Strzałka w doł"
                  className="arrow"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={headerImage.src}
          width={888}
          height={668}
          alt="Ilustracja prezentujaca wejscie do parku"
          className="box-shadow rounded-[20px]"
        />
      </div>

      <div>
        <div className="bg-white rounded-[20px]"></div>
      </div>
    </header>
  );
};

export default Header;
