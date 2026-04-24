import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Career } from "@/components/sections/Career";
import { Exams } from "@/components/sections/Exams";
import { Extras } from "@/components/sections/Extras";
import { StudentLife } from "@/components/sections/StudentLife";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Институт прикладной математики и компьютерных наук (ИПМиКН) ТулГУ",
    url: "https://tulsu.ru/faculty-landing/institut-prikladnoy-matematiki-i-kompyuternykh-nauk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Тула",
      streetAddress: "проспект Ленина, 92",
      addressCountry: "RU",
    },
    telephone: "+7-4872-25-70-70",
    parentOrganization: { "@type": "CollegeOrUniversity", name: "Тульский государственный университет" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Career />
        <Exams />
        <Extras />
        <StudentLife />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
