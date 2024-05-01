import { useTranslation } from "react-i18next";
import { Box, Grid, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import IconDeveloperBoard from "../../components/icons/IconDeveloperBoard";
import IconRobot from "../../components/icons/IconRobot";
import IconCamera from "../../components/icons/IconCamera";
import TechCard from "../../components/molecules/TechCard";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <Box
      mx={{ base: "10px", sm: "50px", md: "100px" }}
      mt={{ base: "25px" }}
      mb={"15px"}
      pb={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={10}
    >
      <ParticlesBg type="cobweb" bg={true} num={100} />
      <Box display={"block"}>
        <Text
          fontSize={{ base: "3xl", md: "6xl", xl: "8xl" }}
          w="fit-content"
          mb={"1rem"}
          fontWeight={"semibold"}
          padding={"10px"}
          borderRadius={"35px"}
        >
          {t("home.name")}
        </Text>
        <List
          fontSize={"lg"}
          fontWeight={"medium"}
          ml={"15px"}
          borderRadius={"10px"}
          border={"2px"}
          borderStyle={"solid"}
          borderColor={"blue.500"}
          w={"fit-content"}
          p="10px"
          backdropFilter={"blur(5px) brightness(105%)"}
        >
          <ListItem>
            <ListIcon as={IconDeveloperBoard} color="red.400" boxSize={5} />
            {t("home.description.dev")}
          </ListItem>
          <ListItem>
            <ListIcon as={IconRobot} color="yellow.500" boxSize={5} />
            {t("home.description.rob")}
          </ListItem>
          <ListItem>
            <ListIcon as={IconCamera} color="blue.400" boxSize={5} />
            {t("home.description.fot")}
          </ListItem>
        </List>
      </Box>
      <Box
        w={{ base: "100%", sm: "75%", md: "45%" }}
        ml={"auto"}
        alignSelf={"end"}
      >
        <Text fontSize={"lg"} fontWeight={"medium"}>
          {t("home.longDescription")}
        </Text>
      </Box>
      <hr style={{ borderColor: "black" }} />
      <Box>
        <Text
          fontSize={"3xl"}
          mb="15px"
          backdropFilter={"blur(5px) brightness(105%)"}
          borderRadius={"15px"}
          px={"15px"}
          w={"fit-content"}
          borderStyle={"solid"}
          border={"2px"}
          borderColor={"yellow.400"}
        >
          {t("home.dawTitle")}
        </Text>
        <Box display={"flex"} flexDir={{ base: "column", sm: "row" }} gap={4}>
          <Text
            w={{ base: "100%", sm: "40%" }}
            fontSize={"lg"}
            fontWeight={"medium"}
          >
            {t("home.dawDesc")}
            <Link
              style={{ color: "green.600" }}
              className="navLink"
              to={"/developer"}
            >
              {t("home.more")}
            </Link>
          </Text>
          <Grid
            ml={{ base: "auto", sm: "auto" }}
            mr={{ base: "auto", sm: "0" }}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            maxHeight={"fit-content"}
            maxWidth={"fit-content"}
            gap={"3"}
          >
            <TechCard
              src="img/java.png"
              name="Java"
              color="red"
              porcentage={90}
            />
            <TechCard
              src="img/sql.svg"
              name="SQL"
              color="cyan"
              porcentage={80}
            />
            <TechCard
              src="img/git.png"
              name="Git"
              color="orange"
              porcentage={85}
            />
            <TechCard
              src="img/js.png"
              name="JavaScript"
              porcentage={90}
              color="yellow"
            />
            <TechCard
              src="img/ts.png"
              name="TypeScript"
              color="blue"
              porcentage={80}
            />
            <TechCard
              src="img/react.png"
              name="ReactJS"
              color="cyan"
              porcentage={85}
            />
            <TechCard
              src="img/nextjs.svg"
              name="Next.js"
              color="gray"
              porcentage={80}
            />
            <TechCard
              src="img/pl.png"
              name="PL/SQL"
              porcentage={65}
              color="green"
            />
          </Grid>
        </Box>
      </Box>
      <hr style={{ borderColor: "black" }} />
      <Box gap={2}>
        <Text
          fontSize={"3xl"}
          mb="15px"
          ml={"auto"}
          w={"fit-content"}
          backdropFilter={"blur(5px) brightness(105%)"}
          borderRadius={"15px"}
          borderStyle={"solid"}
          border={"2px"}
          borderColor={"red.500"}
          px={"15px"}
        >
          {t("home.robTitle")}
        </Text>
        <Box
          display={"flex"}
          flexDir={{ base: "column", sm: "row-reverse" }}
          gap={4}
        >
          <Text
            w={{ base: "100%", sm: "60%" }}
            fontSize={"lg"}
            fontWeight={"medium"}
          >
            {t("home.robDesc")}
            <Link className="navLink" to={"/robotics"}>
              {t("home.more")}
            </Link>
          </Text>
          <Grid
            mr={{ base: "auto", sm: "auto" }}
            ml={{ base: "auto", sm: "0" }}
            maxWidth={"fit-content"}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={"3"}
          >
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
            <TechCard
              src="img/C++.png"
              name="C++"
              color="blue"
              porcentage={70}
            />
            <TechCard
              src="img/sql.svg"
              name="SQL"
              color="cyan"
              porcentage={80}
            />
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
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
