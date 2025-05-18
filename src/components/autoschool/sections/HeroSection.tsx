
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Научись водить с профессионалами</h1>
          <p className="text-lg mb-6">Современная автошкола с высоким процентом сдачи экзаменов с первого раза</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#E63946] hover:bg-[#d02c39] text-white border-none">
              Записаться на курс
            </Button>
            <Button variant="outline" className="text-white">
              Узнать подробнее
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Обучение вождению" 
            className="rounded-lg shadow-lg max-h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
