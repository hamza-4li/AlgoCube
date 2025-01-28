import CodingCard from "./components/CodingCard";
import CourseCategories from "./components/CourseCategories";
import CourseHeader from "./components/CourseHeader";
import CourseSection from "./components/CourseSection";
import DesignCard from "./components/DesignCard";
import DSACard from "./components/DsaCard";
import FaqsCard from "./components/FaqsCard";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Info from "./components/info";
import SignupCard from "./components/SignUpCard";



export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <DesignCard />
      <CodingCard />
      <CourseHeader />
      <CourseCategories />
      <DSACard />
      <CourseSection />
      <SignupCard />
      <FaqsCard />
      <FeaturesSection />
    </main>
  );
}
