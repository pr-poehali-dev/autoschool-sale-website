
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { benefitsList } from '../data/benefits';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-[#F1FAEE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsList.map((item, index) => (
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
  );
};

export default BenefitsSection;
