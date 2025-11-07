import Image from "next/image";
import React from "react";
import bgLeaves from "@/public/bg_leaves.png";
import olszaProjekt from "@/public/olsza-park-projekt-image.jpg";
import ogrodProjekt from "@/public/ogrod_image.jpg";
import Link from "next/link";

const SectionProjekty = () => {
  return (
    <section id="projekty" className="pb-[80px]">
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
        <h3>Projekty</h3>
      </div>
      <main className="px-5 xl:px-[45px] mt-[-80px]">
        <div className="px-5 sm:px-10 xl:px-[85px] bg-white pt-12 lg:pt-[80px] pb-12 lg:pb-[100px] rounded-[20px] box-shadow">
          <div className="flex w-full h-full">
            <div className="hidden lg:block w-[45px] bg-[#BE7837] h-[2px] mr-5 mt-[10px]"></div>
            <div className="grid md:grid-cols-[1fr] gap-[30px] w-full">
              <div>
                <p className="text-base text-[#8F8F8F] text-balance">
                  Tu dzieje się więcej, niż myślisz. Prądnik to ludzie, pomysły
                  i energia, które codziennie kształtują naszą dzielnicę.
                  Zobacz, jakie projekty właśnie realizujemy – od zielonych
                  przestrzeni po wydarzenia, które łączą mieszkańców.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="px-10 lg:px-[100px] mt-[-20px]">
        <div className="flex gap-5 justify-center content-center flex-wrap">
          <div className="max-h-[270px] max-w-[270px] w-full h-full">
            <Link
              href={"/olsza-park-nad-bialucha"}
              className="border-4 border-[#D1DBF4] w-full h-full rounded-[20px] overflow-hidden relative block gradient__overlay"
            >
              <div>
                <Image
                  src={olszaProjekt.src}
                  width={270}
                  height={270}
                  alt="Olsza Park Nad Białuchą"
                  className="w-full max-w-full h-[270px]"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-2 z-40">
                <div className="border border-white/50 w-full h-full rounded-[20px] flex flex-col justify-end content-end">
                  <p className="text-white px-2 pb-5 font-bold text-3xl">
                    Olsza Park <br /> Nad Białuchą
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="max-h-[270px] max-w-[270px] w-full h-full">
            <Link
              href={"/"}
              className="border-4 border-[#D1DBF4] w-full h-full rounded-[20px] overflow-hidden relative block gradient__overlay"
            >
              <div>
                <Image
                  src={ogrodProjekt.src}
                  width={270}
                  height={270}
                  alt="Ogród Społeczny Sad Rusałek"
                  className="w-full max-w-full h-[270px] invert-[0.3]"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-2 z-40">
                <div className="border border-white/50 w-full h-full rounded-[20px] flex flex-col justify-end content-end">
                  <p className="text-white px-2 pb-5 font-bold text-3xl">
                    Już w krótce...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjekty;
