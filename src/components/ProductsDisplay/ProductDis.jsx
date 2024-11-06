import { Box, Image, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const ProductDis = ({ item }) => {
  const navigate = useNavigate();

  const { id, name, color, gender, images, final_price, reviews, rating } = item || {};

  // Ensure images is defined and has at least one element
  const [img, setImg] = useState(images && images.length > 0 ? images[0] : null);

  if (!item) {
    console.error("ProductDis received undefined item");
    return null;
  }

  const handleDes = () => {
    navigate(`/description/${id}`);
  };

  const ChangeHoverImage = () => {
    if (images && images.length > 1) {
      setImg(images[1]);
    }
  };

  const OriginalImage = () => {
    if (images && images.length > 0) {
      setImg(images[0]);
    }
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <Box onClick={handleDes}>
      <Image src={img} alt={name} onMouseEnter={ChangeHoverImage} onMouseLeave={OriginalImage} />
      <Text>{final_price}</Text>
      <HStack>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
          ))}
        <Text>({reviews})</Text>
      </HStack>
    </Box>
  );
};

export default ProductDis;