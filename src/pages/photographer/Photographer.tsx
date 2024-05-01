import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PhotoCompare from "../../components/organisms/PhotoCompare";
import Img from "../../components/atoms/Img";
import TechCard from "../../components/molecules/TechCard";
import { useEffect } from "react";

const Photographer = () => {
  const { t } = useTranslation("global");
  useEffect(() => {
    //disable right click
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <Box
      w="100%"
      backgroundAttachment="fixed"
      backgroundImage="/bg.svg"
      backgroundSize="cover"
    >
      <Box
        position={"relative"}
        zIndex={"0"}
        mx={{ base: "10px", sm: "auto" }}
        w={{ base: "auto", sm: "85%", md: "70%" }}
        display={"flex"}
        flexDir={"column"}
        pb={"3rem"}
        gap={6}
      >
        <Text fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}>
          {t("photographer.title")}
        </Text>
        <Box>
          <TechCard
            src="img/lightroom.png"
            name="Lightroom"
            color="blue"
            porcentage={90}
          />
          <TechCard
            src="img/photoshop.png"
            name="Photoshop"
            color="cyan"
            porcentage={60}
          />
        </Box>
        <Box display={"flex"} flexDir={"row"} gap={6}>
          <PhotoCompare src1="photos/raw/15.jpg" src2="photos/15.jpg" />
          <PhotoCompare src1="photos/raw/16.jpg" src2="photos/16.jpg" />
        </Box>
        <Img src="photos/d1.jpg" />
        <Img src="photos/d2.jpg" />
        <PhotoCompare src1="photos/raw/17.jpg" src2="photos/17.jpg" />
        <PhotoCompare src1="photos/raw/18.jpg" src2="photos/18.jpg" />
        <PhotoCompare src1="photos/raw/19.jpg" src2="photos/19.jpg" />

        <PhotoCompare src1="photos/1.jpg" src2="photos/3.jpg" />
        <PhotoCompare src1="photos/2.jpg" src2="photos/5.jpg" />
        <PhotoCompare src1="photos/6.jpg" src2="photos/11.jpg" />
        <PhotoCompare src1="photos/8.jpg" src2="photos/7.jpg" />
        <PhotoCompare src1="photos/4.jpg" src2="photos/21.jpg" />
        <PhotoCompare src1="photos/22.jpg" src2="photos/23.jpg" />
      </Box>
    </Box>
  );
};

export default Photographer;
