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
import Services2 from "@/components/Servicescopy";
import TargetAudience from "@/components/TargetAudience";
import Suitability from "@/components/Suitability";
import MasterclassDetails from "@/components/MasterclassDetails";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TutorProfile />
      <WebShorties />
      <TargetAudience />
      <Suitability />
      <LearningGoals />
      <MasterclassDetails />
      <Services />
      <Testimonials />
      <RegisterSection />
      <FinalCTA />
      <FAQ />
      <Services2 />
      <Footer />
    </main>
  );
}

