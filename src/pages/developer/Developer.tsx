import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import TechCard from "../../components/molecules/TechCard";
import Img from "../../components/atoms/Img";

const Developer = () => {
  const { t } = useTranslation("global");
  /*let color = Math.round(
    (parseInt(rgbValue[0]) * 299 +
      parseInt(rgbValue[1]) * 587 +
      parseInt(rgbValue[2]) * 114) /
      1000
  );
  let textColor = color > 125 ? "black" : "white"; */
  return (
    <Box
      pb={"10px"}
      w="100%"
      backgroundAttachment="fixed"
      backgroundImage="/dev_bg.svg"
      backgroundSize="cover"
    >
      <Box
        mx={{ base: "10px", sm: "auto" }}
        w={{ base: "auto", sm: "85%", md: "70%" }}
        display={"flex"}
        flexDir={"column"}
        gap={6}
        background={"inherit"}
      >
        <Text fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}>
          {t("home.titles.daw")}
        </Text>
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          gap={4}
          className="invertCont"
        >
          <Box display={"flex"} flexDir={"column"} className="invertCont">
            <Text className="invertText" fontSize={"lg"}>
              {t("developer.description")}
            </Text>
          </Box>
          <iframe
            title="CDP Jose Cabrera"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.1355883916553!2d-6.178941725642766!3d36.86700067776767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0de939ce36e03b%3A0x3eb7adb486ce0f1e!2sCentro%20Docente%20Jos%C3%A9%20Cabrera!5e0!3m2!1ses!2ses!4v1714480143505!5m2!1ses!2ses"
            width="400"
            height="250"
            style={{ border: 0, borderRadius: "15px", marginLeft: "auto" }}
            loading="lazy"
          ></iframe>
        </Box>
        <Box className="invertCont">
          <Text className="invertText" fontSize={"lg"}>
            {t("developer.d2")}
          </Text>
        </Box>
        <Box className="invertCont">
          <Text className="invertText" fontSize={"lg"}>
            {t("developer.d3")}
          </Text>
        </Box>

        <Box>
          <Box w={{ base: "100%", md: "50%" }} mx={"auto"}>
            <Img src="img/matricula.jpg" />
          </Box>
        </Box>
        <Box>
          <TechCard
            src="img/java.png"
            name="Java"
            color="red"
            porcentage={90}
          />
          <TechCard src="img/sql.svg" name="SQL" color="cyan" porcentage={80} />
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
        </Box>
      </Box>
    </Box>
  );
};
export default Developer;
