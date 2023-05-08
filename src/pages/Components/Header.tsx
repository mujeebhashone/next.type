import React from "react";
import Image from "next/image";
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  ListItem,
  UnorderedList,
  Link,
  Flex,
  Container,
  Box,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  MenuDivider,
} from "@chakra-ui/react";
const Header = () => {
  return (
    <Container maxW={"80%"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Image
            src="/assets/images/white1.png"
            width={150}
            height={76}
            alt="company logo"
          />
        </Box>
        <Flex gap={8} py={"9"}>
            <Link color={"#2D3958"} fontSize={"lg"} _hover={{textDecoration: 'none', color: '#0083FF'}} listStyleType={'none'} fontWeight={'medium'}>
              Home
            </Link>

            <Link color={"#2D3958"} fontSize={"lg"} _hover={{textDecoration: 'none', color: '#0083FF'}} listStyleType={'none'} fontWeight={'medium'}>
              Services
            </Link>
         
              <Menu>
  <MenuButton
    px={0}
    py={0}
    transition='all 0.2s'
    borderRadius='md'
    color={"2D3958"} fontSize={"lg"} _hover={{textDecoration: 'none', color: '#0083FF'}} listStyleType={'none'} fontWeight={'medium'}

    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  >
  Talents<ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
            
            <Link  color={"2D3958"} fontSize={"lg"} _hover={{textDecoration: 'none', color: '#0083FF'}} fontWeight={'medium'}  >
              Case Studies 
            </Link>
            <Link color={"#2D3958"} fontSize={"lg"}  textDecoration={'none'} _hover={{textDecoration: 'none', color: '#0083FF'}}  listStyleType={'none'} fontWeight={'medium'}>
              About Us 
            </Link>
            <Menu>
  <MenuButton
    px={0}
    py={0}
    transition='all 0.2s'
    borderRadius='md'
    color={"2D3958"} fontSize={"lg"} _hover={{textDecoration: 'none', color: '#0083FF'}} listStyleType={'none'} fontWeight={'medium'}

    // _hover={{ bg: 'gray.400' }}
    // _expanded={{ bg: 'blue.400' }}
    // _focus={{ boxShadow: 'outline' }}
  >
  Branches<ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>New File</MenuItem>
    <MenuItem>New Window</MenuItem>
    <MenuDivider />
    <MenuItem>Open...</MenuItem>
    <MenuItem>Save File</MenuItem>
  </MenuList>
</Menu>
        </Flex>
        <Button bg={'#0083FF;'} color={'white'} _hover={{bg: '#0083FF',}} rightIcon={<ArrowForwardIcon />}>Let,s Talk</Button>
        
      </Flex>
    </Container>
  );
};

export default Header;
