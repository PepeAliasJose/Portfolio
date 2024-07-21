import { Box, Text } from "@chakra-ui/react";
import ProyectCard from "../../components/organisms/ProyectCard";
import { useTranslation } from "react-i18next";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import IconGit from "../../components/icons/IconGit";

const Proyects = () => {
  const { t } = useTranslation("global");
  return (
    <Box
      mx={{ base: "10px", sm: "auto" }}
      w={{ base: "auto", sm: "85%", md: "70%" }}
      bg={"inherit"}
    >
      <ParticlesBg type="cobweb" bg={true} num={50} color="#F9F9F9"/>
      <Text fontSize={"6xl"} fontWeight={"medium"} height={"min-content"}>
        Mis proyectos
      </Text>
      <ProyectCard
        to="https://github.com/PepeAliasJose/ProyectoFinalRobotica"
        src={process.env.REACT_APP_LOCAL + "proyects/visionPresentation.jpg"}
        title={t("proyects.visual.title")}
        description={
          t("proyects.visual.description") +
          "  " +
          t("proyects.visual.redirect")
        }
        aptitud={[
          t("proyects.visual.aptitudes.0"),
          t("proyects.visual.aptitudes.1"),
          t("proyects.visual.aptitudes.2"),
          t("proyects.visual.aptitudes.3"),
          t("proyects.visual.aptitudes.4"),
          t("proyects.visual.aptitudes.5"),
          t("proyects.visual.aptitudes.6"),
          t("proyects.visual.aptitudes.7"),
        ]}
      />
      <hr style={{ borderColor: "#F9F9F990", borderWidth:"1px", borderRadius:"5px" }} />
      <ProyectCard
        reversed
        to="./"
        src={process.env.REACT_APP_LOCAL + "proyects/carPresentation.jpg"}
        title={t("proyects.car.title")}
        description={t("proyects.car.description")}
        aptitud={[
          t("proyects.car.aptitudes.6"),
          t("proyects.car.aptitudes.5"),
          t("proyects.car.aptitudes.4"),
          t("proyects.car.aptitudes.3"),
          t("proyects.car.aptitudes.2"),
          t("proyects.car.aptitudes.1"),
          t("proyects.car.aptitudes.0"),
        ]}
      />
      <hr style={{ borderColor: "#F9F9F990", borderWidth:"1px", borderRadius:"5px" }} />
      <ProyectCard
        to="https://dragonballdle.web.app/"
        src={process.env.REACT_APP_LOCAL + "proyects/dbd.png"}
        title={t("proyects.dbd.title")}
        description={t("proyects.dbd.description")}
        aptitud={[
          t("proyects.dbd.aptitudes.0"),
          t("proyects.dbd.aptitudes.1"),
          t("proyects.dbd.aptitudes.2"),
          t("proyects.dbd.aptitudes.3"),
          t("proyects.dbd.aptitudes.4"),
          t("proyects.dbd.aptitudes.5"),
          t("proyects.dbd.aptitudes.6"),
          t("proyects.dbd.aptitudes.7"),
        ]}
      />
      <hr style={{ borderColor: "#F9F9F990", borderWidth:"1px", borderRadius:"5px" }} />
      <Box m="10px" p="10px">
        <Text textAlign={"center"}>
          {t("proyects.more")}
          <Link
            to={
              "https://github.com/PepeAliasJose?tab=repositories&q=&type=public&language=&sort="
            }
          >
            <IconGit ml={"10px"} viewBox="0 0 17 17" boxSize={10} />
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Proyects;
