import { Box, Image } from "@chakra-ui/react";
type Props = {
  src1: string;
  src2: string;
};
const PhotoCompare = (props: Props) => {
  return (
    <Box
      position={"relative"}
      zIndex={"0"}
      _hover={{
        zIndex: "999",
      }}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      w="100%"
      gap={4}
    >
      <Box>
        <Image
          _hover={{
            transform: "scale(1.1, 1.1)",
            transitionDuration: "0.15s",
            position: "relative",
            zIndex: "999",
          }}
          borderRadius={"10px"}
          objectFit={"cover"}
          w="auto"
          src={process.env.REACT_APP_LOCAL + props.src1}
        />
      </Box>
      <Box>
        <Image
          _hover={{
            transform: "scale(1.25, 1.25)",
            transitionDuration: "0.15s",
            position: "relative",
            zIndex: "999",
          }}
          border="2px"
          borderStyle={"solid"}
          borderColor={"gray.700"}
          borderRadius={"10px"}
          w={"auto"}
          objectFit={"cover"}
          src={process.env.REACT_APP_LOCAL + props.src2}
        />
      </Box>
    </Box>
  );
};
export default PhotoCompare;
