import Fala from "./ui/fala";
import Footer from "./ui/footer";
import Header from "./ui/header";
import InwestycjaSection from "./ui/inwestycjaSection";
import Navigation from "./ui/navigation";
import RealizacjaSection from "./ui/realizacjaSection";
import SectionAtrakcje from "./ui/sectionAtrakcje";
import SectionMapa from "./ui/sectionMapa";
import anmiationData from "./ui/wave.json";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#F9F9F1]  xl:mt-[60px] xl:mb-[80px] xl:outline xl:outline-black xl:outline-[5px] w-full rounded-[10px]">
      <Navigation />
      <Header />
      <SectionAtrakcje />
      <SectionMapa />
      <Fala animationData={anmiationData} />
      <RealizacjaSection />
      <InwestycjaSection />
      <Footer />
    </div>
  );
}
