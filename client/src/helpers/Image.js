import React from "react";

const Image = ({ src, alt }) => {
  return (
    <img
      src={src && src}
      alt={alt && alt}
      className="object-cover w-full h-full"
    />
  );
};

export default Image;
