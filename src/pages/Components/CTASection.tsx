import React from 'react'
import Image from "next/image";
import { Button } from '@chakra-ui/react'

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import ButtonLayout from './ButtonLayout';


const CTASection = () => {
  return (
    <Box as='section' bgImg={'/assets/images/ctaback.png'} backgroundSize={'cover'} backgroundPosition={'center'} bgRepeat={'no-repeat'} py={{lg:'32',base:'14'}}>
        <Container maxW={{lg:'40%',base:'100%'}}>
            <Box textAlign={'center'}>
                <Heading mb={'5'} textTransform={'capitalize'} fontWeight={'medium'} fontSize={'3xl'}>We,ve helped brands of all kinds and businesses of every size grow their online presense</Heading>
                <Text color={'#6E7CA0'} textTransform={'capitalize'}fontSize={'medium'} mb={'5'} fontWeight={'semibold'}>Are you ready to start your project? Contact us today and get started!</Text>
                <Box>

        <ButtonLayout  buttonText="Let’s Talk" />
        </Box>
            </Box>
            
        </Container>

    </Box>
  )
}

export default CTASection