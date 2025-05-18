
import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  activeTab: string;
}

const ContactForm = ({ activeTab }: ContactFormProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-[#1D3557] text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center font-montserrat">Запишитесь на обучение прямо сейчас!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Ваше имя</label>
              <input 
                type="text" 
                className="w-full p-3 rounded bg-[#2A4A6A] border border-[#457B9D] text-white placeholder:text-gray-300"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block mb-2">Телефон</label>
              <input 
                type="tel" 
                className="w-full p-3 rounded bg-[#2A4A6A] border border-[#457B9D] text-white placeholder:text-gray-300"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2">Выберите категорию</label>
              <select className="w-full p-3 rounded bg-[#2A4A6A] border border-[#457B9D] text-white">
                <option value="">{
                  activeTab === "category-b" ? "Категория B (легковые автомобили)" : 
                  activeTab === "category-a" ? "Категория A (мотоциклы)" : 
                  "Дополнительные услуги"
                }</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <Button className="w-full bg-[#E63946] hover:bg-[#d02c39] text-white text-lg py-6">
                Записаться и получить скидку 10%
              </Button>
              <p className="text-center text-sm mt-4">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
