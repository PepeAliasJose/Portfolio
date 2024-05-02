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
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUsOy7EczMc9t7QWVuMNxSZNCZnHCMFl8",
    authDomain: "jose-rodriguez-caceres.firebaseapp.com",
    projectId: "jose-rodriguez-caceres",
    storageBucket: "jose-rodriguez-caceres.appspot.com",
    messagingSenderId: "610281082622",
    appId: "1:610281082622:web:b8d19b1ef3fb8005cd5faf",
    measurementId: "G-KC0LHG97CJ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
