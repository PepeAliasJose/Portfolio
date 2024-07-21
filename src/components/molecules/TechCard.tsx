import { Box, Image, Text, Progress } from "@chakra-ui/react";

type Props = {
  src: string;
  name: string;
  color?: string;
  porcentage?: number;
  invisible?: boolean;
};
const TechCard = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      float={"left"}
      m="2.5px"
      p="10px"
      borderRadius={"20px"}
      border={"2px"}
      borderStyle={"solid"}
      borderColor={props.color+".500"}
      height={"min-content"}
      gap={2}
      backgroundColor={"#F9F9F930"}
      backdropFilter={"blur(35px)"}
    >
      <Image
        src={process.env.REACT_APP_LOCAL + props.src}
        alt={props.name}
        mx={"auto"}
        minWidth={{ base: "20px", sm: "50px" }}
        maxWidth={{ base: "20px", sm: "50px" }}
        minHeight={{ base: "20px", sm: "50px" }}
        maxHeight={{ base: "20px", sm: "50px" }}
      ></Image>
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={2}
        minWidth={{ base: props.invisible?"min-content":"50px", sm: props.invisible?"min-content":"75px" }}
        h={props.invisible?"100%":"75%"}
      >
        <Box position={"static"} display={'block'} w={"100%"} alignContent={"center"}>
            <Text display={'block'} fontSize={{ base: "md", sm: "lg" }} fontWeight={'bold'} textShadow={"0px 0px 1px black"}>{props.name}</Text>
        </Box>
        <Progress
          display={{ base: "none", sm: props.invisible?"none":"block" }}
          colorScheme={props.color ? props.color : "blue"}
          value={props.porcentage ? props.porcentage : 80}
          borderRadius={"50px"}
          bg={(props.color ? props.color : "blue") + ".200"}
          h={"5px"}
        ></Progress>
      </Box>
    </Box>
  );
};

export default TechCard;
