
import Icon from '@/components/ui/icon';
import { footerCategories, footerInfo, contactInfo } from '../data/footer';

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Car" size={24} />
              <span className="font-semibold text-xl">АвтоПрофи</span>
            </div>
            <p className="text-gray-300">Автошкола с многолетним опытом подготовки водителей разных категорий</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Категории</h4>
            <ul className="space-y-2">
              {footerCategories.map((category, index) => (
                <li key={index}>
                  <a href={category.link} className="text-gray-300 hover:text-white">{category.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              {footerInfo.map((info, index) => (
                <li key={index}>
                  <a href={info.link} className="text-gray-300 hover:text-white">{info.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>{contactInfo.phones[0]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>9:00 - 20:00, Пн - Сб</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Автошкола "АвтоПрофи". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
