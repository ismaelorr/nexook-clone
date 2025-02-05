import Countdown from "@/components/Countdown";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IncomeCalculator from "@/components/IncomeCalculator";
import Premium from "@/components/Premium";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <WaitlistForm/>
      <Pricing />
      <IncomeCalculator/>
      <Countdown/>
      <Premium/>
      <Footer />
    </div>
  );
}
