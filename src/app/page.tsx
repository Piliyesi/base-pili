import Hero from "../components/hero/Hero";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedGames from "../components/home/FeaturedGames";
import DiceBoard from "../components/dice/DiceBoard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedGames />
      <DiceBoard />
      <Footer />
    </>
  );
}