import { Box, Container, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";

const BoxSection2 = () => {
  return (
        <Box as='section' bg={'#F5F5F5'}>
            <Container  maxW={'80%'}  py={{lg:'24', base:'0'}} marginX={'auto'}>
            <Box textAlign={'center'} mb={'12'}>
        <Box as='span' color={'#0083FF'} bg={'#E6F3FF'} px={'4'} py={'2.5'} >-Our Rosters-
        </Box>
        <Heading mb={'3'} mt={'3'}>Discover Our Talents</Heading>
        <Text color={'#6E7CA0'}> We do manage an exclusive roster of talent, from content creadtors and social media influencers to 
Esports commentators, and even hosts.  We work with a plethora of great talents. </Text>

      </Box>
      <SimpleGrid columns={{base: 1, lg: 2}} spacing={3}>
        <Flex border={'1px solid #E7E5EA'} bg={'#FFFFFF'} >
            <Box mt={'-6'} ml={'-3'}>
            <Image
            src="/assets/images/secpic2.png"
            width={250}
            height={297}
            alt="company logo"
          />
            </Box>
            <Box pt={'4'}>
                <Heading color={'#2D3958'} fontSize={'lg'} mb={'3'}>Arab Esports Broadcasters</Heading>
                <Text mb={'3'} color={'#6E7CA0'} fontSize={'md'}>Experienced play-by-play casters of Arabia Talents will level up your sports events.</Text>
                <Link color={'#0083FF'} fontSize={'xs'}>MEET THE FACES</Link>
            </Box>


            

        </Flex>


        <Flex border={'1px solid #E7E5EA'} bg={'#FFFFFF'} >
            
            <Box pt={'4'} pl={'4'}>
                <Heading color={'#2D3958'} fontSize={'lg'} mb={'3'}>Middle Eastern Influencers</Heading>
                <Text mb={'3'} color={'#6E7CA0'} fontSize={'md'}>Arabia Talents connects brands to top influencers, and content creators in the Middle East region.</Text>
                <Link color={'#0083FF'} fontSize={'xs'}>DISCOVER THE LIST</Link>
            </Box>


            <Box mt={'-6'} ml={'-3'}>
            <Image
            src="/assets/images/secpic1.png"
            width={250}
            height={297}
            alt="company logo"
          />
            </Box>


            

        </Flex>



      </SimpleGrid>
            </Container>

        </Box>
  )
}

export default BoxSection2