import { useState } from "react";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      <Sidenav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='mx-auto md:h-full'>
        <Home setSelectedPage={setSelectedPage} />
      </div>
      <div className='mt-96 md:mt-0'>
        <Projects />
      </div>
      <div className='md:mt-0'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
