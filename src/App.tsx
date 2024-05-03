// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import Navbar from "./components/molecules/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Proyects from "./pages/proyects/Proyects";
import Developer from "./pages/developer/Developer";
import Photographer from "./pages/photographer/Photographer";
import Robotic from "./pages/robotics/Robotic";
import Contact from "./pages/contact/Contact";

const App = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
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
