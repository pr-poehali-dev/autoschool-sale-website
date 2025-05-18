
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState("category-b");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
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

      {/* Герой-секция */}
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

      {/* Преимущества */}
      <section id="benefits" className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Опытные инструкторы",
                description: "Средний стаж работы наших преподавателей более 10 лет"
              },
              {
                icon: "Car",
                title: "Современный автопарк",
                description: "Обучение проходит на новых автомобилях с двойным управлением"
              },
              {
                icon: "Clock",
                title: "Гибкий график",
                description: "Утренние, дневные, вечерние группы и индивидуальное обучение"
              },
              {
                icon: "BookOpen",
                title: "Удобные учебные материалы",
                description: "Интерактивные учебники и онлайн-тесты для подготовки"
              },
              {
                icon: "MapPin",
                title: "Удобное расположение",
                description: "Классы в разных районах города, рядом с метро"
              },
              {
                icon: "Wallet",
                title: "Доступные цены",
                description: "Различные варианты рассрочки и специальные предложения"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Курсы и цены */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
            Наши курсы
          </h2>
          
          <Tabs defaultValue="category-b" className="max-w-3xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="category-b">Категория B</TabsTrigger>
              <TabsTrigger value="category-a">Категория A</TabsTrigger>
              <TabsTrigger value="additional">Дополнительно</TabsTrigger>
            </TabsList>
            
            <TabsContent value="category-b" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat">Категория B - легковые автомобили</CardTitle>
                  <CardDescription>Включает теоретический курс и практическое вождение</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Стандартный курс (АКПП)</span>
                      <span className="font-bold">45 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Стандартный курс (МКПП)</span>
                      <span className="font-bold">42 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Интенсивный курс (1 месяц)</span>
                      <span className="font-bold">55 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Дополнительное занятие</span>
                      <span className="font-bold">1 500 ₽/час</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#E63946] hover:bg-[#d02c39] text-white">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="category-a" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat">Категория A - мотоциклы</CardTitle>
                  <CardDescription>Курс для будущих мотоциклистов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Стандартный курс</span>
                      <span className="font-bold">30 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Интенсивный курс</span>
                      <span className="font-bold">40 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Дополнительное занятие</span>
                      <span className="font-bold">1 200 ₽/час</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#E63946] hover:bg-[#d02c39] text-white">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="additional" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat">Дополнительные услуги</CardTitle>
                  <CardDescription>Специальные курсы для разных целей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Восстановление навыков</span>
                      <span className="font-bold">15 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4 border-b">
                      <span className="font-medium">Экстремальное вождение</span>
                      <span className="font-bold">25 000 ₽</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Вождение с прицепом</span>
                      <span className="font-bold">12 000 ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#E63946] hover:bg-[#d02c39] text-white">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
            Отзывы наших выпускников
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Соколова",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2340",
                text: "Очень довольна обучением! Инструктор Сергей Петрович объяснял все очень понятно и терпеливо. Сдала экзамен с первого раза."
              },
              {
                name: "Дмитрий Иванов",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2574",
                text: "Отличная автошкола! Преподаватели объясняют материал доступно, администраторы всегда готовы помочь. Рекомендую всем!"
              },
              {
                name: "Елена Морозова",
                photo: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=2592",
                text: "Записалась в автошколу без опыта вождения, очень боялась. Но благодаря профессионализму инструкторов быстро освоилась за рулем."
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.photo}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма записи */}
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
                  <option value="">{activeTab === "category-b" ? "Категория B (легковые автомобили)" : 
                                     activeTab === "category-a" ? "Категория A (мотоциклы)" : 
                                     "Дополнительные услуги"}</option>
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

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
            Контактная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 font-montserrat text-[#1D3557]">Наши адреса</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Центральный офис:</p>
                    <p className="text-gray-700">ул. Ленина, 123, этаж 2</p>
                    <p className="text-gray-500">Часы работы: Пн-Сб с 9:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Филиал в Южном районе:</p>
                    <p className="text-gray-700">ул. Пушкина, 45, офис 12</p>
                    <p className="text-gray-500">Часы работы: Пн-Пт с 10:00 до 19:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Телефоны:</p>
                    <p className="text-gray-700">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-gray-700">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#1D3557] p-3 rounded-lg text-white self-start">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-700">info@автопрофи.рф</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full border-[#1D3557]">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-[#1D3557]">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-[#1D3557]">
                  <Icon name="Telegram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-[#1D3557]">
                  <Icon name="Youtube" size={20} />
                </Button>
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

      {/* Футер */}
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
                <li><a href="#" className="text-gray-300 hover:text-white">Категория А</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Категория B</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Дополнительное обучение</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Восстановление навыков</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">О компании</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Лицензии</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Контакты</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@автопрофи.рф</span>
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
    </div>
  );
};

export default Index;
