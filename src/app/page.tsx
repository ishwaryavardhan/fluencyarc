import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TutorProfile from "@/components/TutorProfile";
import WebShorties from "@/components/WebStories";
import LearningGoals from "@/components/LearningGoals";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TargetAudience from "@/components/TargetAudience";
import Suitability from "@/components/Suitability";
import MasterclassDetails from "@/components/MasterclassDetails";
import RegisterSection from "@/components/RegisterSection";

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
      <FAQ />
      <RegisterSection />
      <Footer />
    </main>
  );
}

