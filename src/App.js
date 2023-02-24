import { About } from "./Components/About/About";
import Github from "./Components/Calendar/Github";
import { Stars } from "./Components/Calendar/Stars";
import { Contact } from "./Components/Contacts/Contact";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { Skills } from "./Components/Skills/Skills";
import { SoftSkills } from "./Components/Skills/SoftSkills";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <SoftSkills />
      <Github />
      <Stars />
      <Contact />
      
    </div>
  );
}

export default App;
