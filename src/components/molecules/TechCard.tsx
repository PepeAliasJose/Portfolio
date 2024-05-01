import { Box, Image, Text, Progress } from "@chakra-ui/react";

type Props = {
  src: string;
  name: string;
  color?: string;
  porcentage?: number;
};
const TechCard = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      float={"left"}
      m="5px"
      p="10px"
      borderRadius={"10px"}
      height={"min-content"}
      gap={2}
      backdropFilter={"blur(5px) brightness(120%)"}
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
        minWidth={{ base: "50px", sm: "75px" }}
        w={"75%"}
      >
        <Text fontSize={{ base: "sm", sm: "md" }}>{props.name}</Text>
        <Progress
          display={{ base: "none", sm: "block" }}
          colorScheme={props.color ? props.color : "blue"}
          value={props.porcentage ? props.porcentage : 80}
          borderRadius={"5px"}
          bg={(props.color ? props.color : "blue") + ".200"}
        ></Progress>
      </Box>
    </Box>
  );
};

export default TechCard;
