import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeDis = ({ item }) => {
  const navigate = useNavigate();
  const { id, name, color, images } = item;

  // Ensure images is defined and has at least one element
  const [img, setImg] = useState(images && images.length > 0 ? images[0] : null);
  const [fname, setFname] = useState("normal");

  const ChangeHoverImage = () => {
    if (images && images.length > 1) {
      setImg(images[1]);
      setFname("bold");
    }
  };

  const OriginalImage = () => {
    if (images && images.length > 0) {
      setImg(images[0]);
      setFname("normal");
    }
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <Box>
      <Image src={img} alt={name} onMouseEnter={ChangeHoverImage} onMouseLeave={OriginalImage} />
      <Text fontWeight={fname}>{name}</Text>
    </Box>
  );
};