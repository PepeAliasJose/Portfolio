import { Image } from "@chakra-ui/react";
type Props = {
  src: string;
};
const Img = (props: Props) => {
  return (
    <Image
      borderRadius={"15px"}
      filter={"brightness(130%)"}
      src={process.env.REACT_APP_LOCAL + props.src}
    />
  );
};
export default Img;
