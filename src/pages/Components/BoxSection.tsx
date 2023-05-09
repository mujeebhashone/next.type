import { Box, Container, Flex, } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";

const BoxSection = () => {
  return (
    <Container maxW={'100%'}>
        <Flex bg={'#F9FAFB'}>
            <Box width={'370px'} height={'417px'}  border={'border: 1px solid #E7E5EA'} py={'8'} px={'6'} bgImage={'url /assets/images/Abstract.png'}>
            {/* <Image
            src="/assets/images/Abstract.png"
            width={63}
            height={63}
            alt="company logo" */}
          />
            </Box>
            
            

        </Flex>
    </Container>
  )
}

export default BoxSection