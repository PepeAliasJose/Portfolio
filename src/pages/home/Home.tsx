import { useTranslation } from "react-i18next";
import { Box, Flex, Grid, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
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
      {/*<ParticlesBg type="cobweb" bg={true} num={100} />*/}
      <Box display={"block"}>
        <Text
          fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
          mr={'auto'}
          w="fit-content"
          mb={"1rem"}
          fontWeight={"extrabold"}
          padding={"10px"}
          borderRadius={"35px"}
          letterSpacing={".12rem"}
          lineHeight={1}
        >
          {t("home.name").split(" ")[0].toUpperCase() +" "+ t("home.name").split(" ")[1].toUpperCase() }
          <br />
          {t("home.name").split(" ")[2].toUpperCase()}
        </Text>
        <Flex flexDir={{ base: "column", md: "column", xl: "row" }}
        mt={'2rem'}
        gap={6}>
          <List
            spacing={"1"}
            fontSize={{base:"md", md:"2xl"}}
            fontWeight={{base:"medium", md:"bold"}}
            mx={"auto"}
            borderRadius={"15px"}
            border={"3px"}
            borderStyle={"solid"}
            borderColor={"#63b3edC0"}
            minW={"max-content"}
            p="15px"
            backdropFilter={"blur(10px) brightness(90%)"}
          >
            <ListItem>
              <ListIcon as={IconDeveloperBoard} color="red.400" boxSize={5} />
              {t("home.description.dev").toUpperCase()}
            </ListItem>
            <ListItem>
              <ListIcon as={IconRobot} color="yellow.500" boxSize={5} />
              {t("home.description.rob").toUpperCase()}
            </ListItem>
            <ListItem>
              <ListIcon as={IconCamera} color="blue.400" boxSize={5} />
              {t("home.description.fot").toUpperCase()}
            </ListItem>
          </List>
        
          <Box
          mx={{ base: "10px", sm: "auto", md: "auto" }}
          w={{ base: "fit-content" }}
          >
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              {t("home.longDescription")}
            </Text>
          </Box>
        </Flex>
      </Box>
      <hr style={{ borderColor: "#F9F9F990", borderWidth:"1px", borderRadius:"5px" }} />
      <Box w={'100%'}>
        <Text
          fontSize={"3xl"}
          mb="3rem"
          bgColor={"yellow.500"}
          borderRadius={"50px"}
          px={"15px"}
          w={"fit-content"}
          borderStyle={"solid"}
          border={"2px"}
          borderColor={"yellow.400"}
        >
          {t("home.dawTitle").toUpperCase()}
        </Text>
        <Box display={"flex"} flexDir={{ base: "column", md: "row" }} gap={4}>
          <Text style={{ writingMode:"vertical-rl" }} mt=".5rem" letterSpacing={".1rem"} display={{base:"none", md:"block"}}>
            {t("home.description.dev").split(" ")[0].toUpperCase()}
          </Text>
          <Text
            w={{ base: "100%", md: "40%" }}
            fontSize={"lg"}
            fontWeight={"semibold"}
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
            ml={{ base: "auto", md: "auto" }}
            mr={{ base: "auto", md: "0" }}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            height={"fit-content"}
            maxWidth={"fit-content"}
            gap={"3"}
          >
            <TechCard
              src="img/java.png"
              name="Java"
              color="red"
              porcentage={85}
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
              porcentage={80}
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
              porcentage={80}
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
      <hr style={{ borderColor: "#F9F9F990", borderWidth:"1px", borderRadius:"5px" }} />
      <Box display={"flex"} flexDir={{base:"column",md:"row-reverse"}} gap="6">
        <Text style={{ writingMode:"vertical-rl" }} letterSpacing={".1rem"} display={{base:"none", md:"block"}} >
          {t("home.description.rob").toUpperCase()}
        </Text>
        <Box gap={2}>
          <Text
            fontSize={"3xl"}
            fontWeight={'bold'}
            mb={"3rem"}
            ml={"auto"}
            w={"fit-content"}
            borderRadius={"50px"}
            borderStyle={"solid"}
            border={"2px"}
            borderColor={"red.300"}
            bgColor={"red.500"}
            px={"15px"}
          >
            {t("home.robTitle").toUpperCase()}
          </Text>
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row-reverse" }}
            gap={4}
          >
            <Text
              w={{ base: "100%", md: "30%" }}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              {t("home.robDesc")}
              <Link className="navLink" to={"/robotics"}>
                {t("home.more")}
              </Link>
            </Text>
            <Grid
              mr={{ base: "auto", md: "auto" }}
              ml={{ base: "auto", md: "0" }}
              maxWidth={"fit-content"}
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
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
                name="KOP/AWL"
                color="blue"
                porcentage={80}
              />
              <TechCard
                src="img/fanuc.webp"
                name="Fanuc"
                color="yellow"
                porcentage={60}
              />
              <TechCard
                src="img/abb.jpg"
                name="ABB"
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
  );
};

export default Home;
