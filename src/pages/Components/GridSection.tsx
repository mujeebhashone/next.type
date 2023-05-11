import React from 'react'
import Image from "next/image";
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'


const GridSection = () => {
  return (
    <Box as='section' py={'24'} bg={'#F5F5F5'}>
        <Container maxW={{lg:'80%',base:'100%'}}>
            <SimpleGrid columns={{base: 1, lg: 2}} spacing={3} py={'10'}>
                <Box py={'10'}>
                    <Box as='span' fontSize={'4xl'} fontWeight={'bold'} borderBottom={'10px solid #0066FF'}> We Generated 3x More </Box>
                    <Heading mb={'5'}>Engagement In 2022</Heading>
                    <Text textTransform={'capitalize'}  fontSize={'medium'} fontWeight={'medium'} color={'#6E7CA0'}>
                    Through strategy, planning, and marketing we built strong relationships and cooperation between brands and talents which led to increasing brand awareness, and social media engagement for both sides.
                    </Text>

                </Box>
                <Box>
                <Flex justify={'center'} align={'center'}  gap={{lg:'20px',base:'0'}}  flexDir={{lg:'row',base:'column'}}>
                <Flex bg={'#FFFFFF'} py={'4'} px={'9'} align={'center'} justify={'center'} gap={'20px'} borderRadius={'5%'} mb={'5'} >
                    <Box >
                        <Heading fontSize={'3xl'} fontWeight={'semibold'} color={'#2D3958'}>1 Billion</Heading>
                        <Text color={'#6E7CA0'} fontSize={'medium'}>Views in 2021</Text>
                         </Box>
                         <Flex width={'119px'} height={'119px'} bg={'#F4F7F8'} justify={'center'} align={'center'} borderRadius={'40px'}>
                         <Image
              src="/assets/images/eye.png"
              width={56}
              height={56}
              alt="company logo"
              
            />
                         </Flex>
                </Flex>
                <Flex bg={'#FFFFFF'} py={'4'} px={'9'} align={'center'} justify={'center'} gap={'20px'} borderRadius={'5%'} mb={'5'} mr={{lg:'40',base:'0'}} >
                    <Box >
                        <Heading fontSize={'3xl'} fontWeight={'semibold'} color={'#2D3958'}>+128</Heading>
                        <Text color={'#6E7CA0'} fontSize={'medium'}>Project Done</Text>
                         </Box>
                         <Flex width={'119px'} height={'119px'} bg={'#F4F7F8'} justify={'center'} align={'center'} borderRadius={'40px'}>
                         <Image
              src="/assets/images/clipboard-tick.png"
              width={56}
              height={56}
              alt="company logo"
              
            />
                         </Flex>
                </Flex>


                </Flex>
                <Flex justify={'center'} align={'center'} gap={'20px'} flexDir={{lg:'row',base:'column'}}>
                <Flex bg={'#FFFFFF'} py={'4'} px={'9'} align={'center'} justify={'center'} gap={'20px'} borderRadius={'5%'}>
                    <Box >
                        <Heading fontSize={'3xl'} fontWeight={'semibold'} color={'#2D3958'}>+10</Heading>
                        <Text color={'#6E7CA0'} fontSize={'medium'}>Exclusive Deals</Text>
                         </Box>
                         <Flex width={'119px'} height={'119px'} bg={'#F4F7F8'} justify={'center'} align={'center'} borderRadius={'40px'}>
                         <Image
              src="/assets/images/tick2.png"
              width={56}
              height={56}
              alt="company logo"
              
            />
                         </Flex>
                </Flex>
                <Flex bg={'#FFFFFF'} py={'4'} px={'9'} align={'center'} justify={'center'} gap={'20px'} borderRadius={'5%'}>
                    <Box >
                        <Heading fontSize={'3xl'} fontWeight={'semibold'} color={'#2D3958'}>+50</Heading>
                        <Text color={'#6E7CA0'} fontSize={'medium'}>Client OnBoard</Text>
                         </Box>
                         <Flex width={'119px'} height={'119px'} bg={'#F4F7F8'} justify={'center'} align={'center'} borderRadius={'40px'}>
                         <Image
              src="/assets/images/people.png"
              width={56}
              height={56}
              alt="company logo"
              
            />
                         </Flex>
                </Flex>


                </Flex>
                   

                

                </Box>
            </SimpleGrid>

        </Container>

    </Box>
  )
}

export default GridSection