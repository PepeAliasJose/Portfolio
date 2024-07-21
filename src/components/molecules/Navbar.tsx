import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../atoms/LanguageSwitch";
import { Box, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation("global");
  return (
    <Box className="navContainer" mx={{ base: "10px", sm: "50px", md: "100px" }}>
      <Box className="navbar">
        <Box className="navName">
          <Text w={"fit-content"} fontWeight={"bold"}>
            {t("home.name")}
          </Text>
        </Box>
        <Box className="linkBox">
          <Box className="linkList">
            <Link className="navLink " to={"/"}>
              {t("home.links.home")}
            </Link>
            <Link className="navLink " to={"/developer"}>
              {t("home.links.developer")}
            </Link>
            <Link className="navLink " to={"/robotics"}>
              {t("home.links.robotics")}
            </Link>
            <Link className="navLink " to={"/proyects"}>
              {t("home.links.proyects")}
            </Link>
            <Link className="navLink" to={"/photographer"}>
              {t("home.links.photography")}
            </Link>
            <Link className="navLink " to={"/contact"}>
              {t("home.links.contact")}
            </Link>
          </Box>

          <Box className="linkButton invertCont">
            <Menu>
              <MenuButton>{t("home.links.button")}</MenuButton>
              <MenuList bg={"#5354a7"} display={"block"} borderRadius={'15px'} borderWidth={'2px'}>
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
