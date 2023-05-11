import React from 'react'
import Image from "next/image";
import { Box, Container, Flex, Heading } from '@chakra-ui/react';


const BrandSection = () => {
  return (
    <Box as='section' bg={'#F5F5F5'} pb={'12'}>
        <Container maxW={{lg:'80%',base:'100%'}}>
            <Box>
    
            <Box textAlign={'center'} mb={'12'} pt={{lg:'12',base:'3'}}>
          <Box as='span' color={'#FF7342'} bg={'#FFF1ED'} px={'4'} py={'2.5'} >-Clients and Partners-
          </Box>
          <Heading mb={'16'} mt={'7'} textTransform={'capitalize'} fontWeight={'medium'}>Thank you for supporting our talents</Heading>
            </Box>
            <Flex justify={'space-between'} align={'center'} flexDir={{lg:'row',base:'column'}} gap={{lg:'0',base:'10'}}>
                <Box>
                <Image
              src="/assets/images/Electronic-Arts-Logo.png"
              width={70}
              height={70}
              alt="company logo"
              
            />
                </Box>
                <Box>
                <Image
              src="/assets/images/Activision.png"
              width={141}
              height={36}
              alt="company logo"
              
            />
                </Box>
                <Box>
                <Image
              src="/assets/images/Huawei-Logo.png"
              width={124}
              height={70}
              alt="company logo"
              
            />
                </Box>
                <Box>
                <Image
              src="/assets/images/Talabat_Logo.png"
              width={152}
              height={50}
              alt="company logo"
              
            />
                </Box>
                <Box>
                <Image
              src="/assets/images/epicgames.png"
              width={51}
              height={60}
              alt="company logo"
              
            />
                </Box>
                <Box>
                <Image
              src="/assets/images/pngfind.png"
              width={121}
              height={50}
              alt="company logo"
              
            />
                </Box>

            </Flex>
            </Box>
            
        </Container>
    </Box>
  )
}

export default BrandSection