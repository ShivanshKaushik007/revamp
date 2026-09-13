import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Work />
      <Resume />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;