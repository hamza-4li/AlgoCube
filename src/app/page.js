import CodingCard from "./components/Landingpage/CodingCard";
import CourseCategories from "./components/Landingpage/CourseCategories";
import CourseHeader from "./components/Landingpage/CourseHeader";
import CourseSection from "./components/Landingpage/CourseSection";
import DesignCard from "./components/Landingpage/DesignCard";
import DSACard from "./components/Landingpage/DsaCard";
import FaqsCard from "./components/Landingpage/FaqsCard";
import FeaturesSection from "./components/Landingpage/FeaturesSection";
import Hero from "./components/Landingpage/Hero";
import Info from "./components/Landingpage/info";
import SignupCard from "./components/Landingpage/SignUpCard";
import TrustedBy from "./components/Landingpage/Trustedby";



export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
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
