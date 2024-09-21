import Image from "next/image";
import React from "react";
import logoPark from "@/public/park-logo.svg";
import ikonkaFacebook from "@/public/facebook-icon.svg";
import ikonkaInstagram from "@/public/instagram-icon.svg";
import bgLeaves from "@/public/bg_leaves-footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 xl:mt-[80px]">
      <div
        style={{ backgroundImage: `url(${bgLeaves.src})` }}
        className="px-5 xl:px-[45px] pb-[50px] md:bg-[length:100%_90%] bg-no-repeat bg-bottom"
      >
        <div className="bg-[#AEE29C] rounded-[20px] box-shadow pt-[40px] pb-[60px] px-5 xl:px-[60px]">
          <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-10">
            <div className="flex items-start justify-start gap-5 xl:gap-[25px]">
              <Image
                src={logoPark}
                width={75}
                height={75}
                alt="Logo Parku"
                className="box-shadow rounded-full w-[45px] h-[45] xl:w-[75px] xl:h-[75px]"
              />
              <div className="font-bold text-[#F9F9F1] bg-[#AEE29C] z-20 relative">
                <h5 className="text-3xl xl:text-[50px] leading-[1.1]">
                  Olsza Park <br />
                  Nad Białuchą
                </h5>
                <p className="absolute bottom-[-25px] right-[-40px] text-[12px]">
                  - Rok zalozenia: 2023
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-[30px]">
              <Image
                src={ikonkaFacebook}
                width={40}
                height={40}
                alt="Ikonka Facebook"
              />
              <Image
                src={ikonkaInstagram}
                width={40}
                height={40}
                alt="Ikonka Instagrama"
              />
            </div>
          </div>

          <div className="w-full bg-[#BE7837] h-[4px] mt-10 xl:mt-[80px] mb-[45px]" />

          <div className="flex flex-wrap items-start justify-start gap-[35px] mt-[40px] text-white">
            <div className="min-w-[155px]">
              <p className="text-base font-bold mb-5">Lokalizacja</p>
              <p className="text-[12px] font-light leading-6">
                <a
                  href="https://maps.app.goo.gl/pGJjRk5Ti5KVDiqb8"
                  className="underline text-white"
                  target="_blank"
                >
                  Stefana Otwinowskiego
                </a>{" "}
                <br />
                Na przeciwko stacji Kolejowej <br />
                31-521 Kraków, Prądnik Biały
              </p>
            </div>
            <div className="min-w-[155px]">
              <p className="text-base font-bold mb-5">Kontakt</p>
              <p className="text-[12px] font-light leading-6">
                E:{" "}
                <a
                  href="mailto:karol@kwiatek.krakow.pl?subject=Olsza%20Park%20Nad%20Białucha"
                  className="underline text-white"
                  target="_blank"
                >
                  karol@kwiatek.krakow.pl
                </a>
              </p>
            </div>
            <div className="min-w-[155px]">
              <p className="text-base font-bold mb-5">Linia Autobusowa</p>
              <p className="text-[12px] font-light leading-6">
                Przystanek: Prądnik Biały <br />
                Numery: 182, 163, 159
              </p>
            </div>
            <div className="min-w-[155px]">
              <p className="text-base font-bold mb-5">Przydatne Linki</p>
              <div className="w-full grid grid-cols-2 gap-3 text-[12px]">
                <Link className="text-white" href={"/#atrakcje"}>
                  -&nbsp;&nbsp;<span className="underline">Atrakcje</span>
                </Link>
                <a
                  href="https://maps.app.goo.gl/pGJjRk5Ti5KVDiqb8"
                  className="text-white"
                  target="_blank"
                >
                  -&nbsp;&nbsp;<span className="underline">Mapa</span>
                </a>
                <Link href="/#realizacja">
                  -&nbsp;&nbsp;<span className="underline">Realizacja</span>
                </Link>
                <Link href="/">
                  -&nbsp;&nbsp;<span className="underline">Kontakt</span>
                </Link>
                <Link href="/#inwestycja">
                  -&nbsp;&nbsp;<span className="underline">Inwestycja</span>
                </Link>
              </div>
            </div>
            <div className="min-w-[155px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3966076004613!2d19.956859476920037!3d50.07886091404885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b000c47b453%3A0x703dc5bf409bca97!2sOlsza%20Park%20nad%20Bia%C5%82uch%C4%85!5e0!3m2!1spl!2spl!4v1726942416393!5m2!1spl!2spl"
                height="150"
                className="border-none w-full max-w-[230px] rounded-[20px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
