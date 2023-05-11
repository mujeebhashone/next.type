import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <Container maxW={'90%'}>
    <Flex justify={'space-between'} py={'30'} display={{lg:'flex', base:'block'}}>
      <Box>
        <Image
          src="/assets/images/baner1.png"
          width={671}
          height={676}
          alt="company logo"
        />
      </Box>
      <Box width={{base:'100%', lg:'40%'}} mb={'5'}>
        <Box as="span" color={'#E9004F'} fontSize={'medium'} bg={'#FDE6EE'} px={'4'} py={'2.5'} mb={''}>-About Our Company-</Box>
        <Heading fontSize={'4xl'} mb={'5'} mt={'5'}>
         Leading ROI-focused Influencer Marketing Agency.
        </Heading>
        <Text color={'#6E7CA0'} mb={'5'}>
          Our group of marketing experts will guide your company with clear
          direction and actionable steps to achieve its goals and boost your
         growth in the region. 
          <Text mb={'5'}>
          This is made possible by identifying
          KPIs, goals, and other requirements that might have slipped under your
          radar. We follow by building you a custom marketing campaign meant to
          improve brand reputation, increase brand presence and optimize brand
          positioning thanks to our growing network of influencers.
          </Text> 
          <Text mb={'5'}>
          All these
          campaigns are tracked and reported in an honest and transparent way
          that answers all of your burning inquiries.
          </Text>
        </Text>
        <Link>VIEW OUR SERVICES</Link>
      </Box>
    </Flex>
    </Container>
  );
};

export default Section;
