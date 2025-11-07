import { getBlogPosts } from "./lib/postsMiddleware";
import Footer from "./ui/footer";
import HeaderMain from "./ui/headerMain";
import Navigation from "./ui/navigation";
import SectionAktualnosci from "./ui/sectionAktualnosci";
import SectionProjekty from "./ui/sectionProjekty";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-[1280px] mx-auto bg-[#F9F9F1]  xl:mt-[60px] xl:mb-[80px] xl:outline xl:outline-black xl:outline-[5px] w-full rounded-[10px]">
      <Navigation />
      <HeaderMain />
      <SectionAktualnosci posts={posts} />
      <SectionProjekty />
      <Footer />
    </div>
  );
}
