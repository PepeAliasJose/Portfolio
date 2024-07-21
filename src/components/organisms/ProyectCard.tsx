import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  reversed?: boolean;
  title: string;
  description: string;
  src: string;
  aptitud: Array<string>;
};

const ProyectCard = (props: Props) => {
  const flexDir: any = "row" + (props.reversed ? "-reverse" : "");
  return (
    <Box
      my={"10px"}
      py={"10px"}
      display={"flex"}
      flexDir={{ base: "column" }}
      gap={4}
    >
      <Box display={"flex"} flexDir={{ base: "column", lg: flexDir }} gap={4}>
        <Box w={{ base: "100%", lg: "40%" }} borderRadius={"15px"}>
          <Link to={props.to}>
            <Image
              _hover={{
                transform: "scale(1.05, 1.05)",
                transitionDuration: "0.15s",
              }}
              src={props.src}
              alt={props.title}
              border={"solid"}
              borderWidth={"2px"}
              borderColor={"#F9F9F990"}
              borderRadius={"15px"}
              objectFit={"cover"}
              w="100%"
              h="100%"
            />
          </Link>
        </Box>

        <Box
          display={"flex"}
          flexDir={"column"}
          gap={2}
          mr={"auto"}
          maxW={{ base: "100%", lg: "60%" }}
        >
          <Text fontSize={"4xl"}>{props.title}</Text>
          <Text whiteSpace={"pre-wrap"} fontSize={"md"}>
            {props.description}
          </Text>
        </Box>
      </Box>
      <Box display={"block"} gap={2} overflow={""}>
        {props.aptitud.map((e) => (
          <Text
            m="5px"
            key={e}
            fontSize={"sm"}
            float={props.reversed ? "right" : "left"}
            height={"40px"}
            w={"fit-content"}
            padding={"8px"}
            border={"2px"}
            borderColor={"gray.200"}
            borderStyle={"solid"}
            borderRadius={"100px"}
            backdropFilter={"blur(5px) brightness(104%)"}
          >
            {e}
          </Text>
        ))}
      </Box>
    </Box>
  );
};
export default ProyectCard;
