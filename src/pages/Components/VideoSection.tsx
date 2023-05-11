import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";



const VideoSection = () => {
  return (
    <Box as='section'>
      <Container maxW={{lg:'80%',base:'100%'}}>
        <Box textAlign={'center'} mb={'12'} pt={'24'}>
          <Box as='span' color={'#A044FF'} bg={'#F6EDFF'} px={'4'} py={'2.5'} >-our Video-
          </Box>
          <Heading mb={'3'} mt={'3'}>We are ready to serve you differently</Heading>
          <Text color={'#6E7CA0'} pb={'8'}> Arabia Talents brings to the table unmatched know-how in the gaming, esports, and entertainment industries, all backed by the very best in integrated marketing services. </Text>
        </Box>
        <Box position={'relative'} bgImage={'assets/images/Backgorund.png'} bgRepeat={'no-repeat'} backgroundPosition={'center'} height={{lg:'350px'}} mt={{lg:'200px'}} bgSize={'cover'}>
          <Box position={{lg:'absolute'}} top={{lg:"-50%"}} left={{lg:'50%'}} sx={{transform:{lg:"translateX(-50%)"}}}>
            <Image
              src="/assets/images/Videobar.png"
              width={770}
              height={346}
              alt="company logo"
              
            />
          </Box>
          <SimpleGrid columns={{base: 2, lg: 4}} spacing={3} color={'#FFFFFF'} textAlign={'center'} alignContent={'end'} height={'100%'} p={'6'}>
            <Box>
              <Heading fontSize={{lg:'3xl',base:'2xl'}} fontWeight={'semibold'} mb={{lg:'4',base:'2'}}>
                450+
              </Heading>
              <Text>Awesome Talents</Text>
            </Box>
            <Box>
              <Heading fontSize={{lg:'3xl',base:'2xl'}} fontWeight={'semibold'} mb={{lg:'4',base:'2'}}>
                300+
              </Heading>
              <Text>Project Completed</Text>
            </Box>
            <Box>
              <Heading fontSize={{lg:'3xl',base:'2xl'}} fontWeight={'semibold'} mb={{lg:'4',base:'2'}}>
                40 Million
              </Heading>
              <Text>Monthly Impressions</Text></Box>
            <Box>
              <Heading fontSize={{lg:'3xl',base:'2xl'}} fontWeight={'semibold'} mb={{lg:'4',base:'2'}}>
                100 Million
              </Heading>
              <Text>Global Reach</Text>
            </Box>
            </SimpleGrid>
            </Box>
      </Container>
    </Box>
  )
}

export default VideoSection