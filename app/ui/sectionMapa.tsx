import Image from "next/image";
import React from "react";
import mapaParku from "@/public/mapaParku.png";
import placZabawIcon from "@/public/placZabawIcon.svg";
import statekIcon from "@/public/statekIcon.svg";
import infoIcon from "@/public/InfoIcon.svg";
import hustawkiIcon from "@/public/hustawkiIcon.svg";
import wypoczynekIcon from "@/public/wypoczynekIcon.svg";
import strefaEdukacyjnaIcon from "@/public/strefaEdukacyjnaIcon.svg";

const SectionMapa = () => {
  return (
    <section>
      <div className="px-10 lg:px-[130px] pb-[15px]">
        <h3 className="border-text">MAPA</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-[15px] px-10 lg:px-[100px]">
        <div className="block w-full max-w-full">
          <Image
            quality={100}
            priority
            src={mapaParku.src}
            width={760}
            height={405}
            alt="Mapa parku"
            className="box-shadow rounded-[20px] w-full max-w-full"
          />
        </div>
        <div
          style={{ flex: "1 0 300px" }}
          className="w-full max-w-[300px] lg:w-[300px]"
        >
          <div className="flex items-center justify-start mt-5 mb-10">
            <div className="w-[45px] bg-[#BE7837] h-[2px] mr-5 mt-[5px]"></div>
            <h4 className="text-lg font-bold text-[#BE7837]">
              Obiekty Rekreacyjne
            </h4>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-y-[35px] mb-[30px]">
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={placZabawIcon.src}
                width={25}
                height={25}
                alt="Ikonka placu zabaw"
              />
              <p className="text-sm text-black">Plac zabaw</p>
            </div>
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={statekIcon.src}
                width={25}
                height={25}
                alt="Ikonka statku"
              />
              <p className="text-sm text-black">Statek</p>
            </div>
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={infoIcon.src}
                width={25}
                height={15}
                alt="Ikonka informacji"
              />
              <p className="text-sm text-black">Informacje</p>
            </div>
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={hustawkiIcon.src}
                width={25}
                height={25}
                alt="Ikonka huśtawek"
              />
              <p className="text-sm text-black">Huśtawki</p>
            </div>
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={wypoczynekIcon.src}
                width={25}
                height={23}
                alt="Ikonka wypoczynku"
              />
              <p className="text-sm text-black">Wypoczynek</p>
            </div>
            <div className="flex items-center justify-start gap-[20px]">
              <Image
                src={strefaEdukacyjnaIcon.src}
                width={25}
                height={25}
                alt="Ikonka strefy edukacyjnej"
              />
              <p className="text-sm text-black">Strefa Edukacyjna</p>
            </div>
          </div>
          <div className="bg-[#AEE29C] w-full rounded-[20px] box-shadow pt-[20px] px-5 h-[127px]">
            <h4 className="text-[#fff] font-bold text-base mb-2">
              Olsza Park Nad Białuchą
            </h4>
            <p className="text-sm mb-5 text-[#fff]">
              Przestrzeń pełna atrakcji, w której znajdziesz strefy zabawy,
              edukacji oraz miejsca do wypoczynku dla całej rodziny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMapa;
