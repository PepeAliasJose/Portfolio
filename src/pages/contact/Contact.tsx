import { Box, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation("global");
  return (
    <Box
      w="100%"
      h={"100vh"}
      overflowY={"hidden"}
    >
      <Box
        mx={{ base: "10px", sm: "auto" }}
        w={{ base: "auto", sm: "85%", md: "70%" }}
        display={"flex"}
        flexDir={"column"}
        gap={6}
        mt={"2rem"}
      >
        <Text fontSize={"lg"} fontWeight={"medium"}>
          {t("contact")}
        </Text>
        <Box
          mx={"auto"}
          my="5px"
          w="fit-content"
          fontSize={"xl"}
          fontWeight={"large"}
          flexDir={{base:"column", sm:"row" }}
          display={"flex"}
          gap={"6"}
          p={"15px"}
          border={"solid"}
          borderWidth={"2px"}
          borderColor={"#F9F9F920"}
          backdropFilter={"blur(40px)"}
          borderRadius={"20px"}
        >
          <Box flexDir={"row"} display={"flex"} w={"fit-content"} className="link-wrapper">
            <Link
              className="hover-linkedin"
              to="https://www.linkedin.com/in/josé-rodríguez-cáceres-b7721b236/"
            >
              LINKEDIN
            </Link>
          </Box>
          <Box flexDir={"row"} display={"flex"} w={"fit-content"} className="link-wrapper">
            <Link
              className="hover-mail"
              to="mailto:781peperc@gmail.com"
            >
              EMAIL
            </Link>
          </Box>
          <Box flexDir={"row"} display={"flex"} w={"fit-content"} className="link-wrapper">
          <Link
              className="hover-infojobs"
              to="https://www.infojobs.net/candidate/cv/view/index.xhtml"
            >
              INFOJOBS
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
