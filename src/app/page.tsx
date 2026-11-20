import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CatalogoModelos from "@/components/CatalogoModelos";
import ProcesoArtesanal from "@/components/ProcesoArtesanal";
import ConfiguradorLibreta from "@/components/ConfiguradorLibreta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CatalogoModelos />
        <ProcesoArtesanal />
        <ConfiguradorLibreta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}