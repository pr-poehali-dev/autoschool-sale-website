
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { contactLocations, contactInfo } from '../data/contacts';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 bg-[#F1FAEE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
          Контактная информация
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 font-montserrat text-[#1D3557]">Наши адреса</h3>
            <div className="space-y-6">
              {contactLocations.map((location, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{location.title}</p>
                    <p className="text-gray-700">{location.address}</p>
                    <p className="text-gray-500">{location.hours}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Телефоны:</p>
                  {contactInfo.phones.map((phone, index) => (
                    <p key={index} className="text-gray-700">{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-700">{contactInfo.email}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {contactInfo.socialIcons.map((icon, index) => (
                <Button key={index} variant="outline" size="icon" className="rounded-full border-[#1D3557]">
                  <Icon name={icon} size={20} />
                </Button>
              ))}
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={48} className="mb-4 mx-auto text-[#1D3557]" />
              <p className="text-gray-700">Здесь будет карта с расположением автошколы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
