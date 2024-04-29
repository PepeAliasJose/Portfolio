import { Box, Text } from "@chakra-ui/react";
import ProyectCard from "../../components/organisms/ProyectCard";
import { useTranslation } from "react-i18next";
import ParticlesBg from "particles-bg";

const Proyects = () => {
  const { t } = useTranslation("global");
  return (
    <Box
      mx={{ base: "10px", sm: "auto" }}
      w={{ base: "auto", sm: "85%", md: "70%" }}
    >
      <ParticlesBg type="cobweb" bg={true} num={25} />
      <Text fontSize={"6xl"} fontWeight={"medium"} height={"min-content"}>
        Mis proyectos
      </Text>
      <ProyectCard
        to="./visual"
        src={process.env.REACT_APP_LOCAL + "proyects/visionPresentation.jpg"}
        title={t("proyects.visual.title")}
        description={
          t("proyects.visual.description") + " " + t("proyects.info")
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
      <ProyectCard
        reversed
        to="./car"
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
    </Box>
  );
};

export default Proyects;
