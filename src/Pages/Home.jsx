import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Loading from "../components/Loading/Loading";
import Trending from "../components/Trends/Trending";
import { imagesData } from "../utils/data";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <Box w="95%" m="auto">
          <Carousel />
          <Trending />
        </Box>
      )}

      <Box my={"10"}>
        <Stack spacing={"5"} mx={"9"} my={"6"}>
          <Heading textAlign={"left"}>WHAT TYPE OF EQUIPMENT ARE YOU LOOKING FOR?</Heading>
          <Box gap="1rem">
            {imagesData.map((item, index) => (
              <Box
                key={index}
                h={"100%"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"60vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={item.link}
                  alt={item.title}
                />
                <Text
                  position={"absolute"}
                  color={"teal"}
                  top={["260px", "230px", "220px", "230px", "270px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                  fontWeight={"bold"}
                >
                  {item.product}
                </Text>
                <Button
                  onClick={() => navigate(item.route)}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "350px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0.5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>

      <Box my={"10"}>
        <Stack
          spacing={"5"}
          mx={"7"}
          my={"6"}
          w="95%"
          m="auto"
          textAlign={"left"}
        >
          <Heading>FITNESS EQUIPMENT & GEAR</Heading>
          <Text fontSize={["sm", "md", "lg", "xl"]}>
            Embrace your fitness journey with equipment that supports every goal. Whether you're looking for cardio machines to boost endurance or weights to build strength, our selection of top-quality gym gear is here to help you excel. Get the most out of each session with accessories and apparel tailored to elevate your performance, so you can conquer every challenge from the gym to the great outdoors.
          </Text>
        </Stack>
        
        <Flex
          my={"10"}
          bg="yellow"
          color={"black"}
          p="3rem"
          justify={"center"}
          gap="2rem"
          display={"block"}
        >
          <Heading>JOIN FITCLUB AND GET 15% OFF YOUR FIRST PURCHASE</Heading>
          <Button
            my={"4"}
            bg="black"
            color="whitesmoke"
            p="1.5rem 2rem"
            border={"1px solid beige"}
            _hover={{
              background: "none",
              color: "teal",
              border: "1px solid black",
            }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
