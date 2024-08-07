import { Box, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import TechCard from "../../components/molecules/TechCard";
import PhotoCompare from "../../components/organisms/PhotoCompare";

const Robotic = () => {
  const { t } = useTranslation("global");
  return (
    <Box w="100%" pb={"20px"}>
      <Box
        mx={{ base: "10px", sm: "auto" }}
        w={{ base: "auto", sm: "85%", md: "70%" }}
        display={"flex"}
        flexDir={"column"}
        gap={6}
        pt={"2rem"}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          lineHeight={1}
          pb={"2rem"}
        >
          {t("home.titles.ari")}
        </Text>
        <hr
          style={{
            borderColor: "#F9F9F990",
            borderWidth: "1px",
            borderRadius: "5px",
          }}
        />
        <Box>
          <TechCard
            src="img/python.webp"
            name="Python"
            color="blue"
            porcentage={70}
          />
          <TechCard
            src="img/tiaportal.webp"
            name="KOP/AWL Siemens"
            color="blue"
            porcentage={80}
          />
          <TechCard
            src="img/fanuc.webp"
            name="Robots Fanuc"
            color="yellow"
            porcentage={60}
          />
          <TechCard
            src="img/abb.jpg"
            name="Robots ABB"
            color="red"
            porcentage={60}
          />
          <TechCard src="img/C++.png" name="C++" color="blue" porcentage={70} />
          <TechCard src="img/sql.svg" name="SQL" color="cyan" porcentage={80} />
          <TechCard
            src="img/git.png"
            name="Git"
            color="orange"
            porcentage={85}
          />
          <TechCard
            src="img/tf.png"
            name="Tensorflow"
            color="yellow"
            porcentage={55}
          />
          <TechCard
            src="img/opencv.png"
            name="OpenCV"
            color="green"
            porcentage={65}
          />
        </Box>

        <Box
          gap={4}
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          border={"solid"}
          borderWidth={"2px"}
          borderStyle={"solid"}
          padding={"10px"}
          pl={"20px"}
          borderRadius={"25px"}
        >
          <Text>{t("robotics.d1")}</Text>
          <Image
            borderRadius={"15px"}
            maxW={{ base: "100%", md: "45%" }}
            src={process.env.REACT_APP_LOCAL + "robotic/r3.jpg"}
          />
        </Box>

        <Box
          gap={4}
          display={"flex"}
          flexDir={{ base: "column", md: "column" }}
        >
          <Text>{t("robotics.d2")}</Text>
          <Image
            borderRadius={"15px"}
            maxW={{ base: "100%", md: "45%" }}
            src={process.env.REACT_APP_LOCAL + "robotic/r4.jpg"}
          />
        </Box>
        <Box
          gap={4}
          display={"flex"}
          flexDir={{ base: "column", md: "column" }}
          border={"solid"}
          borderWidth={"2px"}
          borderStyle={"solid"}
          padding={"10px"}
          borderRadius={"25px"}
        >
          <Text ml={"5px"}>{t("robotics.d3")}</Text>
          <Image
            borderRadius={"15px"}
            maxW={{ base: "100%", md: "45%" }}
            src={
              process.env.REACT_APP_LOCAL + "proyects/visionPresentation.jpg"
            }
          />
        </Box>
        <Box>
          <PhotoCompare src1="robotic/r2.jpg" src2="robotic/r1.jpg" />
        </Box>
      </Box>
    </Box>
  );
};
export default Robotic;
