"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Header() {
  return (
    <div>
      <Box boxShadow={"lg"}>
        <Container maxW={1400} color={'purple'}>
          <SimpleGrid templateColumns={{lg : 'repeat(3, 1fr)', base : 'repeat(3, 1fr)'}}>
            <Box>
              <Image
                src={logo}
                alt="Panaverse"
                width={150}
                height={120}
              ></Image>
            </Box>
            <Flex
              display={{ lg: "flex", base: "none" }}
              gap={10}
              fontSize="xl"
              fontWeight={"bold"}
              placeItems="center"
            >
              <Link href="/">Home </Link>
              <Link href="/Syllabus">Syllabus </Link>
              <Link href="/Explore">Explore </Link>
              <Link href="/about">About </Link>
              <Link href="/Contact">Contact</Link>
            </Flex>
            <Box>
              <Button
                size={"lg"}
                mt={"20px"}
                colorScheme={'purple'}
                float={"right"}
                display={{ lg: "flex", base: "none" }}
              >
                <Link href={'https://portal.piaic.org/signup'}>Apply</Link>
              </Button>
            </Box>
            <Box display={{base : 'initial', lg : 'none'}} pt={6}>
              <Menu>
            
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  float={'right'}
                />
                <MenuList>
                  <MenuItem><Link href={'/'}>Home</Link> </MenuItem>
                  <MenuItem><Link href={'/Syllabus'}>Syallbus</Link> </MenuItem>
                  <MenuItem><Link href={'/Explore'}>Explore</Link> </MenuItem>
                  <MenuItem><Link href={'/about'}>About us</Link> </MenuItem>
                  <MenuItem><Link href={'/Contact'}>Contact</Link></MenuItem>
                  <MenuItem><Link href={'https://portal.piaic.org/signup'}>Apply Now</Link></MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
