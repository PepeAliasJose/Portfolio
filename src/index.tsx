import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import global_en from "./locales/en/translate.json";
import global_es from "./locales/es/translate.json";
import Navbar from "./components/molecules/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

import "./styles/index.css";
import Proyects from "./pages/proyects/Proyects";

import ObjectDetection from "./pages/proyects/myProyects/ObjectDetection";
import ArduinoCar from "./pages/proyects/myProyects/ArduinoCar";

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
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/proyects/car" element={<ArduinoCar />} />
            <Route path="/proyects/visual" element={<ObjectDetection />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
