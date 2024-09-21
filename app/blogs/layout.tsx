import Navigation from "../ui/navigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="max-w-[1280px] mx-auto bg-[#F9F9F1]  xl:mt-[60px] xl:mb-[80px] xl:outline xl:outline-black xl:outline-[5px] w-full rounded-[10px]">
      <Navigation />
      <div className="prose w-full mx-auto max-w-[1024px] py-10 md:py-16 lg:py-20 px-5">
        {children}
      </div>
    </div>
  );
}
