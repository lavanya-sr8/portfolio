import Contact from "./components/Contact";
import Experiences from "./components/Experiences/Experiences";
import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections/>
      <Navbar/>
      <ThemeToggle />
      <TopBackground />
      <Experiences />
      <Contact />
    </div>  
  );
}
