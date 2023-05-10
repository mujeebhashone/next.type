import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { url } from "inspector";

const Banner = () => {
  return (
    <Container maxW={"100%"}>
      <Flex my={"20"} justify={"space-between"}>
        <Box display={{base:'none', lg:'block'}}>
          <Image
            src="/assets/images/baner.png"
            width={434}
            height={566}
            alt="company logo"
          />
        </Box>
        <Box>
          <Box>
            <Text
              fontSize={"sm"}
              fontWeight={"medium"}
              textAlign={"center"}
              mb={"4"}
              color={'#6E7CA0'}
            >
              -Connecting brands with Arabic Millennials.-
            </Text>
            <Heading
              fontWeight={"bold"}
              fontSize={"5xl"}
              textAlign={"center"}
              mb={"8"}
              letterSpacing={-1}
              
            >
              Middle East <Box as={'span'} borderBottom={'10px solid #FFCE41'}>Influencers & on-air</Box> Talent Agency
            </Heading>
            <Text textAlign={"center"} fontSize={"xs"} fontWeight={"medium"} color={'#6E7CA0'}>
              Brands can reach their targeted audiences thanks to our managed{" "}
              <br /> roster of content creators, Esports talents, and social
              media influencers.
            </Text>
          </Box>
      <Flex justify={"center"} align={"center"} gap={"4"} mt={"10"} flexDirection={{lg: "row", base:"column"}}>
            <ButtonLayout buttonText="content creators" />
            <ButtonLayout isTransparent={true} buttonText="On-Air Talents" />
          </Flex>
          <Box textAlign={"center"} mx={"auto"} mt={{lg:'40', base:'10'}}>
            <Image
              src="/assets/images/mouse.png"
              width={70}
              height={70}
              alt="company logo"
              style={{
                margin: "0 auto",
              }}
            />
          </Box>
        </Box>
        <Box display={{base:'none', lg:'block'}}>
          <Image
            src="/assets/images/baner2.png"
            width={434}
            height={566}
            alt="company logo"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Banner;
