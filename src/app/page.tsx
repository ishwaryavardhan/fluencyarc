import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TutorProfile from "@/components/TutorProfile";
import WebShorties from "@/components/WebStories";
import LearningGoals from "@/components/LearningGoals";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TutorProfile />
      <WebShorties />
      <LearningGoals />
      <Services />
      <Testimonials />
      <FAQ />
      <RegisterSection />
      <Footer />
    </main>
  );
}

