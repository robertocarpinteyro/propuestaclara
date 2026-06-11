import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Formatos from "../components/Formatos";
import InstagramFeed from "../components/InstagramFeed";
import Enfoque from "../components/Enfoque";
import ComoLoHacemos from "../components/ComoLoHacemos";
import PorQueFunciona from "../components/PorQueFunciona";
import Contacto from "../components/Contacto";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero ready={!isLoading} />
        <Formatos />
        <InstagramFeed />
        <Enfoque />
        <ComoLoHacemos />
        <PorQueFunciona />
        <Contacto />
      </main>
    </>
  );
};

export default Index;
