import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Notes from "@/components/sections/Notes";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Resume />
      <Work />
      <Skills />
      <Notes />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
