import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const SliderSection = () => {
  return (
     <Box as='section' bg={'#FFC700'} py={'24'}>
        <Container maxW={{lg:'80%', base:'100%'}}>
        <Box textAlign={'center'} mb={'12'}>
          <Box as='span' color={'#FFFFFF'} bg={'#0083FF'} px={'4'} py={'2.5'} >-Case Studies-
          </Box>
          <Heading mb={'3'} mt={'5'} color={'#393939'}>Best Work Showcase</Heading>
          <Text color={'#393939'} pb={'8'} fontWeight={'semibold'} fontSize={'lg'}> Driven by our passion for the industry, and our team’s, Arabia Talents have created some of the most engaging influencer campaigns in gaming, sports, technology and more. </Text>
        </Box>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}
        spaceBetween={30}>
        <SwiperSlide>
        <Image
              src="/assets/images/social1.png"
              width={336}
              height={454}
              alt="company logo"
              
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
              src="/assets/images/social2.png"
              width={336}
              height={454}
              alt="company logo"
              
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
              src="/assets/images/social3.png"
              width={336}
              height={454}
              alt="company logo"
              
            />
        </SwiperSlide>
        <SwiperSlide>

        <Image
              src="/assets/images/social4.png"
              width={336}
              height={454}
              alt="company logo"
              
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
              src="/assets/images/social2.png"
              width={336}
              height={454}
              alt="company logo"
              
            />
        </SwiperSlide>

      </Swiper>

        </Container>

     </Box>
  )
}

export default SliderSection