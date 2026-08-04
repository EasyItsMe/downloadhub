import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SupportedPlatforms } from "@/components/sections/SupportedPlatforms";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Screenshots } from "@/components/sections/Screenshots";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      
      <Hero />
      <SupportedPlatforms />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Screenshots />
      <Testimonials />
      <FAQ />
      <FinalCTA />

      <Footer />
    </main>
  );
}
