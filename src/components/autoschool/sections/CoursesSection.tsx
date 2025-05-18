
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryBPrices, categoryAPrices, additionalServicesPrices } from '../data/prices';

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("category-b");

  return (
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
            <PriceCard 
              title="Категория B - легковые автомобили"
              description="Включает теоретический курс и практическое вождение"
              prices={categoryBPrices}
            />
          </TabsContent>
          
          <TabsContent value="category-a" className="space-y-6">
            <PriceCard 
              title="Категория A - мотоциклы"
              description="Курс для будущих мотоциклистов"
              prices={categoryAPrices}
            />
          </TabsContent>
          
          <TabsContent value="additional" className="space-y-6">
            <PriceCard 
              title="Дополнительные услуги"
              description="Специальные курсы для разных целей"
              prices={additionalServicesPrices}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCardProps {
  title: string;
  description: string;
  prices: PriceItem[];
}

const PriceCard = ({ title, description, prices }: PriceCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl font-montserrat">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {prices.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between p-4 ${index < prices.length - 1 ? 'border-b' : ''}`}
          >
            <span className="font-medium">{item.name}</span>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      <Button className="w-full mt-6 bg-[#E63946] hover:bg-[#d02c39] text-white">
        Записаться на курс
      </Button>
    </CardContent>
  </Card>
);

export default CoursesSection;
