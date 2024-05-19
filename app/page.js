import HeroSection from "./_components/HeroSection";
import Description from "./_components/Description";
import Testimonials from "./_components/Testimonials";
import Features from "./_components/Features";
import Team from "./_components/Team";
import FAQ from "./_components/FAQ";
import KitchenForm from "./_components/KitchenForm";
import Video from "./_components/Video";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <Description />
      <Testimonials />
      <Features />
      <KitchenForm />
      <Video />
      <Team />
      <FAQ />
    </div>
  );
}
