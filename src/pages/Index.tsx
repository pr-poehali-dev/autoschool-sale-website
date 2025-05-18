import { useState } from "react";

// Import layout components
import Navbar from "@/components/autoschool/layout/Navbar";
import Footer from "@/components/autoschool/layout/Footer";

// Import section components
import HeroSection from "@/components/autoschool/sections/HeroSection";
import BenefitsSection from "@/components/autoschool/sections/BenefitsSection";
import CoursesSection from "@/components/autoschool/sections/CoursesSection";
import TestimonialsSection from "@/components/autoschool/sections/TestimonialsSection";
import ContactForm from "@/components/autoschool/sections/ContactForm";
import ContactsSection from "@/components/autoschool/sections/ContactsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("category-b");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Layout components */}
      <Navbar />

      {/* Main content sections */}
      <HeroSection />
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactForm activeTab={activeTab} />
      <ContactsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
