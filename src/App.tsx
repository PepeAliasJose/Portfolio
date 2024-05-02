import Navbar from "./components/molecules/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Proyects from "./pages/proyects/Proyects";
import Developer from "./pages/developer/Developer";
import Photographer from "./pages/photographer/Photographer";
import Robotic from "./pages/robotics/Robotic";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/photographer" element={<Photographer />} />
        <Route path="/robotics" element={<Robotic />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
