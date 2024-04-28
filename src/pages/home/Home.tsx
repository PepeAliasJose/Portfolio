import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <Box m={"10px"}>
      <Text fontSize={{ base: "3xl", md: "5xl" }}>{t("home.name")}</Text>
      <List>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;
