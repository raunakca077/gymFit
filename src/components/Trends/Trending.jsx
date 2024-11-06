import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMensData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";

const Trending = () => {
  const dispatch = useDispatch();
  const mensD = useSelector((store) => store.pagesReducer.mensD);

  useEffect(() => {
    if (mensD?.length === 0) {
      dispatch(getMensData());
    }
  }, [dispatch, mensD?.length]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={5}>
        Trending
      </Heading>
      <Slider {...settings}>
        {mensD.map((item) => (
          <HomeDis key={item.id} item={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default Trending;