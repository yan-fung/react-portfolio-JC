import { useState } from "react";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      <Sidenav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='mx-auto md:h-full'>
        <Home setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
};

export default App;
