import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div style={{ position: "relative" }}>
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
