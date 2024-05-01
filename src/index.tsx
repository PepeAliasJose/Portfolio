import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import i18next from "i18next";
import global_en from "./locales/en/translate.json";
import global_es from "./locales/es/translate.json";

import Navbar from "./components/molecules/Navbar";

import Home from "./pages/home/Home";
import Proyects from "./pages/proyects/Proyects";
import Developer from "./pages/developer/Developer";
import Photographer from "./pages/photographer/Photographer";
import Robotic from "./pages/robotics/Robotic";
import Contact from "./pages/contact/Contact";

import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
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
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
