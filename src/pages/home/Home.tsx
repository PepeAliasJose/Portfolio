import * as React from "react";
import LanguageSwitch from "../../components/atoms/LanguageSwitch";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <LanguageSwitch></LanguageSwitch>
      {t("hello")}
    </div>
  );
};

export default Home;
