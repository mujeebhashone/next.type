import React from "react";
import Image from "next/image";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Icon,
  IconButton,
  Center,
} from "@chakra-ui/react";
import ButtonLayout from "./ButtonLayout";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <Container maxW={{xl: "80%", base: "100%"}} >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Image
            src="/assets/images/white1.png"
            width={150}
            height={76}
            alt="company logo"
          />
        </Box>
        <Flex gap={8} py={"9"} display={{ lg: "flex", base: "none" }}>
          <Link
            color={"#2D3958"}
            fontSize={"lg"}
            _hover={{ textDecoration: "none", color: "#0083FF" }}
            listStyleType={"none"}
            fontWeight={"medium"}
          >
            Home
          </Link>

          <Link
            color={"#2D3958"}
            fontSize={"lg"}
            _hover={{ textDecoration: "none", color: "#0083FF" }}
            listStyleType={"none"}
            fontWeight={"medium"}
          >
            Services
          </Link>

          <Menu>
            <MenuButton
              px={0}
              py={0}
              transition="all 0.2s"
              borderRadius="md"
              color={"2D3958"}
              fontSize={"lg"}
              _hover={{ textDecoration: "none", color: "#0083FF" }}
              listStyleType={"none"}
              fontWeight={"medium"}

              // _hover={{ bg: 'gray.400' }}
              // _expanded={{ bg: 'blue.400' }}
              // _focus={{ boxShadow: 'outline' }}
            >
              Talents
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuItem>Save File</MenuItem>
            </MenuList>
          </Menu>

          <Link
            color={"2D3958"}
            fontSize={"lg"}
            _hover={{ textDecoration: "none", color: "#0083FF" }}
            fontWeight={"medium"}
          >
            Case Studies
          </Link>
          <Link
            color={"#2D3958"}
            fontSize={"lg"}
            textDecoration={"none"}
            _hover={{ textDecoration: "none", color: "#0083FF" }}
            listStyleType={"none"}
            fontWeight={"medium"}
          >
            About Us
          </Link>
          <Menu>
            <MenuButton
              px={0}
              py={0}
              transition="all 0.2s"
              borderRadius="md"
              color={"2D3958"}
              fontSize={"lg"}
              _hover={{ textDecoration: "none", color: "#0083FF" }}
              listStyleType={"none"}
              fontWeight={"medium"}

              // _hover={{ bg: 'gray.400' }}
              // _expanded={{ bg: 'blue.400' }}
              // _focus={{ boxShadow: 'outline' }}
            >
              Branches
              <ChevronDownIcon />
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
        <Box display={{base: 'none', lg: 'block'}}>

        <ButtonLayout  buttonText="Let’s Talk" />
        </Box>

        <IconButton
          display={{ lg: "none", base: "inline-block" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Menu"
          variant="outline"
        />
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <Flex
                flexDirection={"column"}
                align={"center"}
                justify={"center"}
                display={{ lg: "none" }}
              >
                <Link
                  color={"#2D3958"}
                  fontSize={"md"}
                  _hover={{ textDecoration: "none", color: "#0083FF" }}
                  listStyleType={"none"}
                  display={"block"}
                  pb={'5'}
                >
                  Home
                </Link>

                <Link
                  color={"#2D3958"}
                  fontSize={"md"}
                  _hover={{ textDecoration: "none", color: "#0083FF" }}
                  listStyleType={"none"}
                  display={"block"}
                  pb={'5'}
                >
                  Services
                </Link>

                <Menu>
                  <MenuButton
                    px={0}
                    py={0}
                    transition="all 0.2s"
                    borderRadius="md"
                    color={"2D3958"}
                    fontSize={"md"}
                    _hover={{ textDecoration: "none", color: "#0083FF" }}
                    listStyleType={"none"}
                    pb={'5'}

                    // _hover={{ bg: 'gray.400' }}
                    // _expanded={{ bg: 'blue.400' }}
                    // _focus={{ boxShadow: 'outline' }}
                  >
                    Talents
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>

                <Link
                  color={"2D3958"}
                  fontSize={"md"}
                  _hover={{ textDecoration: "none", color: "#0083FF" }}
                  display={"block"}
                  pb={'5'}
                >
                  Case Studies
                </Link>
                <Link
                  color={"#2D3958"}
                  fontSize={"md"}
                  textDecoration={"none"}
                  _hover={{ textDecoration: "none", color: "#0083FF" }}
                  listStyleType={"none"}
                  display={"block"}
                  pb={'5'}
                >
                  About Us
                </Link>
                <Menu>
                  <MenuButton
                    px={0}
                    py={0}
                    transition="all 0.2s"
                    borderRadius="md"
                    color={"2D3958"}
                    fontSize={"md"}
                    _hover={{ textDecoration: "none", color: "#0083FF" }}
                    listStyleType={"none"}
                    pb={'5'}

                    // _hover={{ bg: 'gray.400' }}
                    // _expanded={{ bg: 'blue.400' }}
                    // _focus={{ boxShadow: 'outline' }}
                  >
                    Branches
                    <ChevronDownIcon />
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
              <Button
          display={{ lg: "none" }}
          bg={"#0083FF;"}
          color={"white"}
          _hover={{ bg: "#0083FF" }}
          rightIcon={<ArrowForwardIcon />}
        >
          Let,s Talk
        </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
};

export default Header;
