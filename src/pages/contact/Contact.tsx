import { Box, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation("global");
  return (
    <Box
      w="100%"
      h={"100vh"}
      position={"fixed"}
      overflowY={"hidden"}
    >
      <Box
        mx={{ base: "10px", sm: "auto" }}
        w={{ base: "auto", sm: "85%", md: "70%" }}
        display={"flex"}
        flexDir={"column"}
        gap={6}
      >
        <Text fontSize={"lg"} fontWeight={"medium"}>
          {t("contact")}
        </Text>
        <Box
          mx={"auto"}
          my="5px"
          fontSize={"xl"}
          fontWeight={"large"}
          flexDir={"column"}
          display={"flex"}
        >
          <Box flexDir={"row"} display={"flex"} w={"fit-content"}>
            <Link
              className="navLink"
              to="https://www.linkedin.com/in/josé-rodríguez-cáceres-b7721b236/"
            >
              <Image src={process.env.REACT_APP_LOCAL + "linkedin.svg"} />
              Linkedin
            </Link>
          </Box>
          <Box flexDir={"row"} display={"flex"} w={"fit-content"}>
            <Link
              className="navLink"
              to="https://www.infojobs.net/candidate/cv/view/index.xhtml"
            >
              <Image
                src={process.env.REACT_APP_LOCAL + "infojobs.svg"}
                mr={"2px"}
              />
              Infojobs
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
