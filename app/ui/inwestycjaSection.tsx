import Image from "next/image";
import React from "react";
import arrowButton from "@/public/arrow-button.svg";
import listekDeokoracja from "@/public/listek-image.png";
import listekDeokoracjaDruga from "@/public/listek-image-dekoracja.png";

const InwestycjaSection = () => {
  return (
    <div className="px-5 xl:px-[45px] bg-white text-[#000000e5] py-10 xl:py-[80px]">
      <div className="text-center pb-10 xl:pb-[80px]">
        <h3 className="text-[36px] mb-5 leading-tight">
          Dlaczego warto nas odwiedzić?
        </h3>
        <p className="text-xl xl:text-[30px] text-balance">
          Sprawdź co możemy Ci zaoferować, aby wspólnie osiągnąć cel
        </p>
      </div>
      <div className="px-5 lg:px-[45px] flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-[100px]">
        <div className="relative">
          <video
            controls
            autoPlay
            playsInline
            muted
            loop
            src={"/converter_to_webm.webm"}
            className="w-[390px] rounded-[20px] box-shadow border-4 border-[#D1DBF4]"
          />
          <div className="absolute top-[40px] right-[-30px]">
            <Image
              src={listekDeokoracja}
              width={60}
              height={80}
              alt="Dekoracja video pierwsza"
            />
          </div>
          <div className="absolute bottom-[60px] left-[-30px]">
            <Image
              src={listekDeokoracjaDruga}
              width={60}
              height={80}
              alt="Dekoracja video druga"
            />
          </div>
        </div>
        <div className="max-w-[480px]">
          <h4 className="text-[30px] mb-5">Silna inwestycja</h4>
          <p className="text-base text-[#00000099]">
            Od 2022 roku firma Land Art Projekt S.C. z siedzibą w Krakowie jest
            naszym głównym partnerem w realizacji projektów parkowych.
            <br />
            <br />
            Dzięki ich wieloletniemu doświadczeniu w dziedzinie architektury
            krajobrazu i urbanistyki, Land Art Projekt S.C. dostarcza nam
            najnowsze rozwiązania w zakresie zagospodarowania przestrzeni,
            projektowania terenów zielonych i infrastruktury rekreacyjnej.
            <br />
            <br />
            Od tego czasu zrealizowała liczne projekty na terenie Polski,
            zdobywając uznanie za profesjonalizm i jakość swoich usług.
          </p>
          <div className="mt-[30px] flex flex-col sm:flex-row items-center justify-between gap-5">
            <a
              href="https://maps.app.goo.gl/pGJjRk5Ti5KVDiqb8"
              target="_blank"
              className="w-[208px] py-6 box-shadow bg-[#BE7837] text-white flex items-center justify-center gap-[10px] rounded-[20px] font-bold text-sm"
            >
              <div>Nawiguj do Parku</div>
              <Image
                src={arrowButton}
                width={10}
                height={4}
                alt="Strzałka w prawo"
                className="invert"
              />
            </a>
            <a
              className="w-[208px] py-6 box-shadow bg-transparent text-[#00000099] flex items-center justify-center gap-[10px] rounded-[20px] font-bold text-sm border-2 border-[#00000099] border-collapse"
              href="#atrakcje"
            >
              <div>Poznaj Atrakcje</div>
              <Image
                src={arrowButton}
                width={10}
                height={4}
                alt="Strzałka w prawo"
                className="fill-[#00000099]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InwestycjaSection;
