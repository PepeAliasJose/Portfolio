import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <Box m={"10px"} display={"flex"} flexDirection={"column"}>
      <Box display={"block"}>
        <Text fontSize={{ base: "3xl", md: "5xl" }}>{t("home.name")}</Text>
        <List fontSize={"sm"}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="blue.500" />
            {t("home.description.dev")}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="blue.500" />
            {t("home.description.rob")}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="blue.500" />
            {t("home.description.fot")}
          </ListItem>
        </List>
      </Box>
      <Box alignSelf={"end"}>1</Box>
      <Box alignSelf={"start"}>2</Box>
      <Box
        w={{ base: "100%", sm: "75%", md: "45%" }}
        ml={"auto"}
        alignSelf={"end"}
      >
        <Text fontSize={"md"}>{t("home.longDescription")}</Text>
      </Box>
    </Box>
  );
};

export default Home;
