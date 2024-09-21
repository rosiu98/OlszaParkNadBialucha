import Image from "next/image";
import React from "react";
import bgLeaves from "@/public/bg_leaves.png";
import homesIlustration from "@/public/homesIlustration.png";
import parkIlustration from "@/public/parkIlustrations.png";

const SectionAtrakcje = () => {
  return (
    <section id="atrakcje" className="pb-[80px]">
      <div className="sm:px-5 xl:px-[45px]">
        <Image
          src={bgLeaves.src}
          width={1190}
          height={130}
          alt="Tło z liściami"
          className="w-full max-w-full"
        />
      </div>
      <div className="text-4xl xl:text-[50px] w-full bg-[#AEE29C] text-[50px] font-bold text-[#F9F9F1] px-10 xl:pl-[130px] pt-10 xl:pt-[40px] pb-[110px]">
        <h3>Atrakcje</h3>
      </div>
      <main className="px-5 xl:px-[45px] mt-[-80px]">
        <div className="px-5 sm:px-10 xl:px-[85px] bg-white pt-12 lg:pt-[80px] pb-12 lg:pb-[100px] rounded-[20px] box-shadow">
          <div className="flex w-full h-full">
            <div className="hidden lg:block w-[45px] bg-[#BE7837] h-[2px] mr-5 mt-[10px]"></div>
            <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-[30px] w-full">
              <div>
                <h4 className="text-lg text-[#BE7837] font-bold mb-10 uppercase">
                  Nietuzinkowe Atrakcje
                </h4>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Łączy to, co najlepsze w naturze i rekreacji. Już pierwszy
                  spacer po parku zapewnia prawdziwą eksplozję wrażeń - od
                  zielonych krajobrazów po przyjemny szum rzeki Białucha.
                </p>
              </div>
              <div className="hidden lg:block relative">
                <Image
                  src={homesIlustration.src}
                  width={358}
                  height={320}
                  className="absolute top-[-170px] right-0"
                  alt="Ilustracja z domkami dla ptaków"
                />
              </div>
              <div>
                <h4 className="text-lg text-[#BE7837] font-bold mb-10 uppercase">
                  Wyjątkowe Doświadczenia
                </h4>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Pełne naturalnych zakątków, które pozwolą Ci ukoić zmysły i
                  cieszyć się pełnym relaksem na łonie przyrody.
                </p>
              </div>
              <div>
                <h4 className="text-lg text-[#BE7837] font-bold mb-10 uppercase">
                  Historyczna przestrzeń
                </h4>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Wyjątkowe połączenie industrialnego charakteru z elegancką i
                  przytulną atmosferą, tworząc miejską oazę, gdzie przeszłość
                  spotyka nowoczesność i naturę.
                </p>
              </div>
              <div>
                <h4 className="text-lg text-[#BE7837] font-bold mb-10 uppercase">
                  Egzotyczny krajobraz
                </h4>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Miejska oaza, w której zgiełk miasta zanika w tle, oferując
                  ciszę i spokój w otoczeniu natury.
                </p>
              </div>
              <div>
                <h4 className="text-lg text-[#BE7837] font-bold mb-10 uppercase">
                  Olsza
                </h4>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Tętniąca życiem kulturalnym dzielnica pełna urokliwych uliczek
                  i zabytków, tworząca magiczną atmosferę, w której historia
                  spotyka się z nowoczesnością.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="px-10 lg:px-[100px] mt-[-20px]">
        <Image
          src={parkIlustration.src}
          width={1180}
          height={505}
          alt="Ilustracje przedstawiające park"
          className="w-full max-w-full"
        />
      </div>
    </section>
  );
};

export default SectionAtrakcje;
