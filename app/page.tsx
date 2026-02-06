import React from "react";
import { CircularTestimonials } from '@/components/ui/circular-testimonials';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { MentorSection } from '@/components/mentor-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

const testimonials = [
  {
    quote:
      "ഈ കോഴ്സ് പഠിച്ചതിന് ശേഷം എനിക്ക് ബിസിനസിനെക്കുറിച്ച് നല്ല ധാരണ ലഭിച്ചു.",
    name: "സക്കറിയ സലിം",
    designation: "വിദ്യാർത്ഥി",
    src: "/zakariya.jpg",
  },
  {
    quote:
      "പ്രവാസീതം പ്ലാറ്റ്ഫോം വഴി എനിക്ക് പുതിയ അവസരങ്ങൾ കണ്ടെത്താൻ കഴിഞ്ഞു.",
    name: "കാസിം",
    designation: "സംരംഭകൻ",
    src: "/kasim.jpg",
  },
  {
    quote:
      "പ്രവാസികൾക്ക് സ്വന്തമായി ഒരു ബിസിനസ് തുടങ്ങാൻ ഈ പ്ലാറ്റ്ഫോം സഹായിക്കുന്നു.",
    name: "സലീം ഹരിപ്പാട്",
    designation: "മെന്റർ",
    src: "/salim.png",
  },
];

export default function Home() {
  return (
    <main className="bg-[#060507] min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />

      <MentorSection />

      <section className="py-20">

        <div className="bg-[#060507] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1024px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#f7f7ff",
                designation: "#e1e1e1",
                testimony: "#f1f1f7",
                arrowBackground: "#0582CA",
                arrowForeground: "#141414",
                arrowHoverBackground: "#f7f7ff",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
