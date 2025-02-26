import Footer from "@/components/ui/footer";
import { Title } from "@/components/ui/title";
import Cards from "@/components/ui/cards";
import List from "@/components/ui/list";

function Freshman() {
  return (
    <div>
      <Title
        title="Freshman"
        description="Find and attend events, browse and join organizations, and showcase your involvement."
      />
      <div className="flex flex-col items-center justify-center space-y-4 pt-64 w-full">
        <div className="flex flex-col items-center justify-center">
          <iframe
            className="w-full max-w-[1208px] h-[677px] tablet:rounded-lg tablet:w-[730px] laptop:w-[1208px]"
            src="https://www.youtube.com/embed/maOIsdrlfg4?si=2ZBuBketE0AnRaEa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="font-manrope text-[28px] pt-8 pb-8">75th NUSSU Welcome Video</p>
        </div>
      </div>
      <div className="p-28">
        <List />
      </div>
      <div className="pb-28">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default Freshman;
