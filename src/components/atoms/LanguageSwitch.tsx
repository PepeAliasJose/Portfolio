import { Select } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: any) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };
  return (
    <Select
      size={"md"}
      variant={"unstyled"}
      borderColor={"gray.900"}
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </Select>
  );
};
export default LanguageSwitch;
