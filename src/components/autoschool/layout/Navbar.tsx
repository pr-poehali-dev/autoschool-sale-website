
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Navbar = () => {
  return (
    <nav className="bg-[#1D3557] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <Icon name="Car" size={32} />
          <span className="font-semibold text-xl">АвтоПрофи</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-300">О нас</a>
          <a href="#courses" className="hover:text-gray-300">Курсы</a>
          <a href="#benefits" className="hover:text-gray-300">Преимущества</a>
          <a href="#testimonials" className="hover:text-gray-300">Отзывы</a>
          <a href="#contacts" className="hover:text-gray-300">Контакты</a>
        </div>
        <Button variant="outline" className="bg-[#E63946] hover:bg-[#d02c39] text-white border-none hidden md:flex">
          Позвонить
        </Button>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
