
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { testimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#F1FAEE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat text-[#1D3557]">
          Отзывы наших выпускников
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
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
  );
};

export default TestimonialsSection;
