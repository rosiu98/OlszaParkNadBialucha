"use client";

import Image from "next/image";
import React, { useState } from "react";
import bgLeaves from "@/public/bg_leaves.png";
import tabPicture from "@/public/tab-picture.png";
import tabPicture2 from "@/public/tab-picture2.png";
import tabPicture2_1 from "@/public/tab-picture2-1.png";
import tabPicture3 from "@/public/tab-picture3.png";
import tabPicture3_1 from "@/public/tab-picture3-1.png";
import { motion } from "framer-motion";

const RealizacjaSection = () => {
  const [isActive, setIsActive] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Pomysł i Inspiracja",
    },
    {
      id: 2,
      name: "Pierwsze Kroki",
    },
    {
      id: 3,
      name: "Finalizacja i Odbiór",
    },
  ];

  const Compontent = () => {
    const animationVariants = {
      hidden: { opacity: 0, y: 0 }, // Initial state, off-screen and transparent
      visible: { opacity: 1, y: 0 }, // Final state, fully visible and in place
    };

    if (isActive === 1) {
      return (
        <motion.div
          key={"comp1"}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-[75px]"
        >
          <div>
            <div className="block w-full max-w-full">
              <Image
                src={tabPicture.src}
                width={320}
                height={115}
                alt="Ilustracja parku"
                className="block rounded-[20px] box-shadow"
              />
            </div>
            <div className="my-5 text-xl font-semibold">
              Pomysł i Inspiracja
            </div>
            <div className="lg:max-w-[375px] text-[13px] text-[#00000099] leading-relaxed">
              „<strong>Olsza Park nad Białuchą</strong>” narodził się z potrzeby
              przekształcenia zaniedbanych terenów w tętniące życiem miejsce
              rekreacji i relaksu. Inicjatorem projektu był radny Karol Kwiatek,
              który złożył wniosek do Budżetu Obywatelskiego z wizją stworzenia
              parku liniowego wzdłuż rzeki Białuchy.
            </div>
          </div>
          <div className="w-full lg:max-w-[580px]">
            <div className="w-full bg-[#AEE29C] rounded-[20px] p-5 md:p-10">
              <div className="bg-white rounded-[20px] box-shadow py-10 px-6">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">
                      Analiza i Plany
                    </h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      Obszar <strong>Kraków Olsza</strong>, zarośnięty i
                      zaniedbany, miał zostać przekształcony w&nbsp;park, który
                      odzwierciedlałby naturalne piękno i spokój. Ankieta
                      przeprowadzona wśród mieszkańców pozwoliła zebrać sugestie
                      dotyczące przyszłego parku, co wpłynęło na ostateczny
                      kształt projektu.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">Wizja</h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      Projekt zakładał, że Olsza Park nad Białuchą będzie
                      miejscem,{" "}
                      <strong>gdzie natura jest na pierwszym miejscu</strong>.
                      Ścieżki miały być naturalne, wysypane ścinkami drewna,
                      otoczone bujną zielenią. Park miał umożliwiać
                      przeprowadzenie lekcji przyrody w naturalnym środowisku,
                      wspierając edukację ekologiczną i integrację społeczności
                      lokalnej.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    if (isActive === 2) {
      return (
        <motion.div
          key={"comp2"}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-[75px]"
        >
          <div>
            <div className="flex items-center justify-start gap-[10px]">
              <Image
                src={tabPicture2.src}
                width={160}
                height={115}
                alt="Ilustracja parku"
                className="block rounded-[20px] box-shadow"
              />
              <Image
                src={tabPicture2_1.src}
                width={160}
                height={115}
                alt="Ilustracja parku"
                className="block rounded-[20px] box-shadow"
              />
            </div>
            <div className="my-5 text-xl font-semibold">Pierwsze Kroki</div>
            <div className="lg:max-w-[375px] text-[13px] text-[#00000099] leading-relaxed">
              Realizacja Olsza Parku nad Białuchą rozpoczęła się od rozbiórki
              starego ogrodzenia i hangaru, które zajmowały część terenu. Firma
              Land Art Projekt S.C. z Krakowa wygrała przetarg na prace
              projektowe w <strong>marcu 2022</strong> roku. Projekt zakładał
              stworzenie naturalnych ścieżek, licznych nasadzeń, oraz tablic
              edukacyjnych.
            </div>
          </div>
          <div className="w-full lg:max-w-[580px]">
            <div className="w-full bg-[#AEE29C] rounded-[20px] p-5 md:p-10">
              <div className="bg-white rounded-[20px] box-shadow py-10 px-6">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">
                      Prace Budowlane
                    </h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      W <strong>listopadzie 2023</strong> roku, po wyborze
                      wykonawcy, rozpoczęły się intensywne prace budowlane.
                      Firma Star-Kop Stal Sp. z o.o. podjęła się wykonania robót
                      budowlanych, które obejmowały wytyczenie ścieżek,
                      przygotowanie terenu pod nasadzenia, i budowę małej
                      architektury parkowej.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">
                      Nasadzenia i Wykończenie
                    </h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      Do <strong>marca 2024</strong> roku ukończono większość
                      prac związanych z nasadzeniami. Wprowadzono nowe drzewa,
                      krzewy i rośliny, tworząc malowniczy krajobraz, który miał
                      przyciągać zarówno mieszkańców, jak i przyrodników.
                      Wprowadzono także naturalne elementy edukacyjne, które
                      miały służyć jako narzędzie do nauki o lokalnej faunie i
                      florze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    if (isActive === 3) {
      return (
        <motion.div
          key={"comp3"}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animationVariants}
          transition={{ duration: 0.2 }}
          className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-[75px]"
        >
          <div>
            <div className="flex items-center justify-start gap-[10px]">
              <Image
                src={tabPicture3.src}
                width={160}
                height={115}
                alt="Ilustracja parku"
                className="block rounded-[20px] box-shadow"
              />
              <Image
                src={tabPicture3_1.src}
                width={160}
                height={115}
                alt="Ilustracja parku"
                className="block rounded-[20px] box-shadow"
              />
            </div>
            <div className="my-5 text-xl font-semibold">
              Finalizacja i Odbiór
            </div>
            <div className="lg:max-w-[375px] text-[13px] text-[#00000099] leading-relaxed">
              8 kwietnia 2024 roku projekt Olsza Park nad Białuchą został
              <strong>oficjalnie odebrany</strong>. Mimo początkowych trudności,
              takich jak problemy z odwodnieniem terenu, udało się stworzyć
              przestrzeń, która spełniała założenia projektu. Ostateczne prace
              nad poprawą trawnika zakończono do końca maja 2024 roku.
            </div>
          </div>
          <div className="w-full lg:max-w-[580px]">
            <div className="w-full bg-[#AEE29C] rounded-[20px] p-5 md:p-10">
              <div className="bg-white rounded-[20px] box-shadow py-10 px-6">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">
                      Otwarcie dla Mieszkańców
                    </h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      Park szybko stał się popularnym miejscem dla mieszkańców,
                      oferując{" "}
                      <strong>
                        przestrzeń do spacerów, wypoczynku i edukacji
                      </strong>
                      . Naturalne ścieżki, liczne nasadzenia i mała architektura
                      parkowa wkomponowały się w otoczenie, tworząc harmonijną
                      całość. Miejsce to stało się także idealnym punktem
                      startowym do eksploracji innych przylegających terenów
                      zielonych wzdłuż Białuchy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#BE7837]">
                      Wpływ na Społeczność
                    </h4>
                    <p className="mt-4 text-[13px] text-[#00000099] leading-[1.8]">
                      „Olsza Park nad Białuchą” jest nie tylko przestrzenią
                      rekreacyjną, ale także dowodem na to, jak{" "}
                      <strong>
                        lokalne inicjatywy mogą odmieniać miejskie przestrzenie
                      </strong>
                      . Projekt, od początkowej koncepcji do realizacji,
                      zaangażował lokalną społeczność i pokazał, że współpraca
                      mieszkańców i samorządu może prowadzić do stworzenia
                      wartościowych miejsc publicznych. Park będzie służył jako
                      przykład dla przyszłych projektów rewitalizacyjnych w
                      Krakowie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <section className="pb-[80px]">
      <div className="sm:px-5 xl:px-[45px]">
        <Image
          src={bgLeaves.src}
          width={1190}
          height={130}
          alt="Tło z liściami"
          className="w-full max-w-full"
        />
      </div>
      <div className="text-4xl xl:text-[50px] w-full bg-[#BE7837] text-[50px] font-bold text-[#F9F9F1] px-10 xl:pl-[130px] pt-10 xl:pt-[40px] pb-[40px]">
        <h3>Realizacja</h3>
      </div>

      <div className="px-5 xl:px-[45px]">
        <div className="flex items-center justify-start gap-[10px]  mt-10 xl:mt-[80px]">
          {tabs.map((tab) => (
            <div
              onClick={() => setIsActive(tab.id)}
              key={tab.id}
              className={`w-[216px] py-3 ${
                isActive === tab.id ? "bg-[#AEE29C]" : "bg-white"
              }  flex items-center justify-center rounded-[20px] cursor-pointer box-shadow transition`}
            >
              <div className="flex items-center justify-center gap-[10px]">
                <div
                  className={`w-[26px] h-[26px] rounded-full hidden md:flex items-center justify-center ${
                    isActive === tab.id
                      ? "bg-white text-[#8F8F8F]"
                      : "bg-[#AEE29C] text-white"
                  } text-lg font-bold `}
                >
                  {tab.id}
                </div>
                <div className="text-[12px] lg:text-sm font-medium">
                  {tab.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[15px] bg-white rounded-[20px] box-shadow  px-5 lg:px-[75px] pt-[40px] pb-[45px] relative">
          <div className="absolute top-[-20px] right-5">
            <div className="text-[32px] font-bold text-white bg-[#AEE29C] w-[46px] h-[46px] flex items-center justify-center rounded-full box-shadow">
              {isActive}
            </div>
          </div>
          <Compontent />
        </div>
      </div>
    </section>
  );
};

export default RealizacjaSection;
