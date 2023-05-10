import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import Section from './Section';

const BoxSection = () => {
  return (
  <Box as='section' bg={'#F9FAFB'}>
    <Container maxW={'80%'}  py={{lg:'24', base:'0'}} marginX={'auto'}>
      <Box textAlign={'center'} mb={'12'}>
        <Box as='span' color={'#0083FF'} bg={'#E6F3FF'} px={'4'} py={'2.5'} >-What We Do-
        </Box>
        <Heading mb={'3'} mt={'3'}>We’re Offering Diverse Influencer Services</Heading>
        <Text color={'#6E7CA0'}>Arabia Talents is an agency that offers 360° marketing and operation services to brands seeking to increase their presence in the Arab world. </Text>

      </Box>
     
      <SimpleGrid columns={{base: 1, lg: 3}} spacing={5} >
        <Box border={'1px solid #E7E5EA'} px={'7'} py={'9'} bg={'#FFFFFF;'} borderRadius={'12px'}>
          <Heading  position={'relative'} zIndex={'1'} _before={{
            content: `""`, width: '63px', height: '63px', bg: '#886CFF', borderRadius: '100%',position:'absolute',top:'-7px', left:'16px', zIndex:'-1',opacity:'.1'
          }} mb={'5'}>01</Heading>
          <Text mb={'4'} fontSize={'lg'} fontWeight={'medium'} >Influencer Marketing</Text>
          <Text mb={'12'} color={'#6E7CA0'}>We have the right knowledge, tools, and expertise to help your company succeed in influencer marketing campaigns.</Text>
          <Link fontSize={'medium'}>LEARN MORE</Link>
          </Box>

        

        <Box border={'1px solid #E7E5EA'} px={'7'} py={'9'} bg={'#FFFFFF;'} borderRadius={'12px'}>
          <Heading  position={'relative'} zIndex={'1'} _before={{
            content: `""`, width: '63px', height: '63px', bg: '#EF3737', borderRadius: '100%',position:'absolute',top:'-7px', left:'16px', zIndex:'-1',opacity:'.1'
          }} mb={'5'}>01</Heading>
          <Text mb={'4'} fontSize={'lg'} fontWeight={'medium'} >Influencer Marketing</Text>
          <Text mb={'12'} color={'#6E7CA0'}>We have the right knowledge, tools, and expertise to help your company succeed in influencer marketing campaigns.</Text>
          <Link fontSize={'medium'}>LEARN MORE</Link>

        </Box>

        <Box  border={'1px solid #E7E5EA'} px={'7'} py={'9'} bg={'#FFFFFF;'} borderRadius={'12px'}>
          <Heading  position={'relative'} zIndex={'1'} _before={{
            content: `""`, width: '63px', height: '63px', bg: '#FF9513', borderRadius: '100%',position:'absolute',top:'-7px', left:'16px', zIndex:'-1',opacity:'.1'
          }} mb={'5'}>01</Heading>
          <Text mb={'4'} fontSize={'lg'} fontWeight={'medium'} >Influencer Marketing</Text>
          <Text mb={'12'} color={'#6E7CA0'}>We have the right knowledge, tools, and expertise to help your company succeed in influencer marketing campaigns.</Text>
          <Link fontSize={'medium'}>LEARN MORE</Link>

        </Box>
        </SimpleGrid>
     



    </Container>
    </Box>
  )
}

export default BoxSection