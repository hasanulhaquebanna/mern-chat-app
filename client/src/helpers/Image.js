import { Image as Img } from "@chakra-ui/react";

const Image = ({ src, alt }) => {
  return (
    <Img
      src={src && src}
      alt={alt && alt}
      className="object-cover w-full h-full"
    />
  );
};

export default Image;
