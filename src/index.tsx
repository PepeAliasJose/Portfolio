import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { I18nextProvider } from "react-i18next";

import ReactDOM from "react-dom/client";
import i18next from "i18next";
import global_en from "./locales/en/translate.json";
import global_es from "./locales/es/translate.json";

import "./styles/index.css";
import App from "./App";

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
        <App />
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
