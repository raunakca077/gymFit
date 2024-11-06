import React from "react";
import {
  Box,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");

  const cards = [
    {
      id: 1000,
      title: "Elevate Your Workout",
      text: "Discover premium gym equipment and gear to fuel every session. From strength training to cardio, we have everything you need to achieve your fitness goals.",
      image:
        "https://img.freepik.com/free-photo/close-up-dumbbell-pair-arrangement_23-2149848757.jpg?w=1380&t=st=1699202806~exp=1699203406~hmac=8ad4c306df76cf47fa63512594e1e2ffb6788dfcdd54c1b938170f31417f61e3",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height={"6xl"}
            color="whitesmoke"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%), url(${card.image})`}
          >
            {/* Caption Block */}
            <Container
              size="container.lg"
              height="600px"
              m="auto"
              position="relative"
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                  color="yellow.400"
                  fontWeight="bold"
                  textShadow="1px 1px 4px black"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={["sm", "md", "lg", "xl"]}
                  color="whiteAlpha.900"
                  fontWeight="medium"
                  textShadow="1px 1px 3px black"
                >
                  {card.text}
                </Text>
                <Flex gap={isLargerThan ? "2rem" : "1rem"} justify={"center"}>
                  <Button
                    fontSize={["xs", "sm", "md", "lg", "xl"]}
                    bg="yellow.400"
                    color="black"
                    fontWeight="bold"
                    _hover={{
                      bg: "yellow.300",
                      color: "black",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Link to="/weights">SHOP WEIGHTS</Link>
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="yellow.400"
                    color="black"
                    fontWeight="bold"
                    _hover={{
                      bg: "yellow.300",
                      color: "black",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Link to="/cardio">CARDIO EQUIPMENT</Link>
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="yellow.400"
                    color="black"
                    fontWeight="bold"
                    _hover={{
                      bg: "yellow.300",
                      color: "black",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Link to="/accessories">GYM ACCESSORIES</Link> {/*me,women,shoes*/}
                  </Button>
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
