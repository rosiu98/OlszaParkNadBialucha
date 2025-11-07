import Image from "next/image";
import React from "react";
import headerImage from "@/public/headerImage_main.png";
import arrowDown from "@/public/arrow-down.svg";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <header className="px-5 xl:px-[45px] pt-[30px] pb-[60px] xl:pb-[110px]">
      <div className="relative flex flex-col order-1">
        <div className="xl:absolute top-[44px] right-0">
          <div className="pt-[30px] pb-[34px] px-5 xl:px-[45px]  font-bold text-[#F9F9F1] bg-[#AEE29C] z-20 rounded-[20px] relative box-shadow mb-5">
            <h1 className="text-4xl xl:text-[50px] leading-[1.1]">
              Poznaj <br /> Dzielnicę Prądnika
            </h1>
            <p className="absolute bottom-0 right-0 text-[12px] p-3 px-5">
              - Rzeka Białucha
            </p>
          </div>
          <div className="hidden xl:block w-full max-w-[290px] xl:w-[290px] h-[430px] rounded-[20px] xl:ml-auto text-base text-[#8F8F8F] bg-white box-shadow">
            <div className="pt-[30px] px-5">
              <h2 className="text-[#BE7837] font-bold text-lg mb-5">
                Olsza Nad Białuchą
              </h2>
              <p className="text-base mb-5 text-[#8F8F8F]">
                Część Krakowa, która z roku na rok zyskuje coraz większe
                znaczenie.
                <br />
                <br /> Łączy wygodę życia w mieście z bliskością natury i
                terenów rekreacyjnych. W sąsiedztwie znajduje się{" "}
                <Link
                  className="underline underline-offset-4 decoration-[#AEE29C] decoration-1 text-[#AEE29C]"
                  href={"/olsza-park-nad-bialucha"}
                >
                  Olsza Park Nad Białuchą
                </Link>{" "}
                – nowoczesna przestrzeń spacerowa i wypoczynkowa, popularna
                wśród mieszkańców i rodzin z dziećmi.
              </p>

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

export default HeaderMain;
