import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../atoms/LanguageSwitch";
import { Box, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation("global");
  return (
    <Box className="navContainer">
      <Box className="navbar">
        <Box className="navName">
          <Text w={"fit-content"} fontWeight={"bold"}>
            {t("home.name")}
          </Text>
        </Box>
        <Box className="linkBox">
          <Box className="linkList">
            <Link className="navLink" to={"/"}>
              {t("home.links.home")}
            </Link>
            <Link className="navLink" to={"/developer"}>
              {t("home.links.developer")}
            </Link>
            <Link className="navLink" to={"/robotics"}>
              {t("home.links.robotics")}
            </Link>
            <Link className="navLink" to={"/proyects"}>
              {t("home.links.proyects")}
            </Link>
            <Link className="navLink" to={"/photographer"}>
              {t("home.links.photography")}
            </Link>
            <Link className="navLink" to={"/contact"}>
              {t("home.links.contact")}
            </Link>
          </Box>

          <Box className="linkButton">
            <Menu>
              <MenuButton>{t("home.links.button")}</MenuButton>
              <MenuList bg={"gray.100"} display={"block"}>
                <Link className="navLink" to={"/"}>
                  {t("home.links.home")}
                </Link>
                <Link className="navLink" to={"/developer"}>
                  {t("home.links.developer")}
                </Link>
                <Link className="navLink" to={"/robotics"}>
                  {t("home.links.robotics")}
                </Link>
                <Link className="navLink" to={"/proyects"}>
                  {t("home.links.proyects")}
                </Link>
                <Link className="navLink" to={"/photographer"}>
                  {t("home.links.photography")}
                </Link>
                <Link className="navLink" to={"/contact"}>
                  {t("home.links.contact")}
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Box className="languageSelector">
          <LanguageSwitch />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
