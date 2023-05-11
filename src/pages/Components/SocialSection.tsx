import { Box, Container, Flex, Heading, Text, position } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";


const SocialSection = () => {
  return (
    <Box as='section' bg={'#F5F5F5'}>
        <Container maxW={{lg:'70%',base:'100%'}} py={'36'}>
            <Flex  justify={'space-between'} align={'center'} mb={'40px'} flexDirection={{lg:'row',base:'column'}}>
                <Box width={{lg:'30%'}}>
                <Box as='span' color={'#E9004F'} bg={'#FDE6EE'} px={'4'} py={'2.5'}>-Channels-
          </Box>
          <Heading pt={'4'} fontSize={'3xl'} fontWeight={'semibold'}>
          We use a multi-channel social media approach.
          </Heading>
                </Box>
                <Box width={{lg:'40%'}}>
                    <Text color={'#6E7CA0'}>
                    With a complementarity between mega and macro-influencers, and a strategic target on each platform to hit the right target population you wish; 
                    </Text>
                    <Text color={'#6E7CA0'}>
                    we can fulfill your social media goals and establish a community instead of just taking a typical UA approach.

                    </Text>
                </Box>
            </Flex>
            <Flex justify={'space-between'} >
                <Box mb={'40px'} >
                <Image
              src="/assets/images/TikTok.png"
              width={100}
              height={71}
              alt="company logo"
              
            />

                </Box>
                <Box mt={'50px'}>
                <Image
              src="/assets/images/social.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
                <Box>
                <Image
              src="/assets/images/youtube.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
                <Box mt={'50px'}>
                <Image
              src="/assets/images/instagram1.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
                <Box>
                <Image
              src="/assets/images/facebook.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
                <Box mt={'50px'}>
                <Image
              src="/assets/images/skype.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
                <Box>
                <Image
              src="/assets/images/snapchat.png"
              width={115}
              height={182}
              alt="company logo"
              
            />

                </Box>
            </Flex>

        </Container>

    </Box>
  )
}

export default SocialSection