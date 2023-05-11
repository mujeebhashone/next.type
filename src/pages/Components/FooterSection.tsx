import { Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";


const FooterSection = () => {
    return (

        <Box as='section' bg={'#292F3A'}>
            <Container maxW={'100%'}>
                <Flex justify={'center'} align={'center'} gap={'100px'} flexDir={{lg:'row',base:'column'}}>

                    <Box>
                        <Flex justify={'center'} align={'center'} gap={'50'} pb={'5'} pt={'9'} borderBottom={'2px solid #BDBDBD'}>
                            <Link color={'#FFFFFF'}>Find Talent</Link>
                            <Link color={'#FFFFFF'}>Case Studies</Link>
                        </Flex>
                        <Box>
                            <Text py={'5'} color={'#FFFFFF'} textAlign={'center'}>
                                Copyright 2022 Arabia Talents, All rights reserved.
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                            src="/assets/images/white2.png"
                            width={207}
                            height={93}
                            alt="company logo"
                        />

                    </Box>

                    <Box>
                        <Flex pt={'4'} pb={'4'} justify={'center'} align={'center'} gap={'30px'} borderBottom={'1px solid #BDBDBD'}>

                            <Box>
                                <Image
                                    src="/assets/images/Facebookvector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>
                        
                            <Box>
                                <Image
                                    src="/assets/images/instagramvector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>
                            <Box>
                                <Image
                                    src="/assets/images/Linkedinvector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>
                            <Box>
                                <Image
                                    src="/assets/images/tictokvector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>
                            <Box>
                                <Image
                                    src="/assets/images/youtubevector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>
                            <Box>
                                <Image
                                    src="/assets/images/twittervector.png"
                                    width={24}
                                    height={24}
                                    alt="company logo"
                                />

                            </Box>

                        </Flex>
                        <Flex justifyContent={'center'} align={'center'} gap={'50px'} py={'5'}>
                            <Link color={'#FFFFFF'}>Terms & Conditions</Link>
                            <Link color={'#FFFFFF'}>Privacy Policy</Link>
                        </Flex>
                    </Box>

                </Flex>




            </Container>

        </Box>
    )
}

export default FooterSection