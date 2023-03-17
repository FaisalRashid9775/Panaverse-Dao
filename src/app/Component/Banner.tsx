"use client";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image2 from "../../../public/Image2.png";
import Image3 from "../../../public/Image3.webp";
import React from "react";
import Image from "next/image";
import { RevealWrapper } from  'next-reveal'
import Instructor from "./instructor";
import Course from "./Course";

export default function Banner() {
  return (
    <div>
      <Box>
        <Container maxW={1400}>
          <Flex display={{ base: "grid", lg: "flex" }}>
            <Box
              flexBasis={"50%"}
              py={{ base: 5, lg: 40 }}
              mx={{ base: 5, lg: 20 }}
            >
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Heading color={'purple'}>
                Getting Ready for the Next Generation and Future of the Internet
              </Heading>
              <Text py={5}>
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
              <Text>
                Admission Open in Islamabad, Lahore, Karachi, Peshawar
              </Text>
              <Button size={"lg"} colorScheme={'purple'} mt={5}>
                {" "}
                More Info
              </Button>
              </RevealWrapper>
            </Box>
            <Box mt={20} flexBasis={"50%"}>
              <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
              <Image
                src={Image2}
                alt="PanaverseImage"
                height={450}
                width={400}
              ></Image>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
        <Box py={{base: 5, lg: 20}}>
          <Container maxW={1400}>
            <Flex display={{ base: "grid", lg: "flex" }}>
              <Box flexBasis={"50%"} mx={{base: 5, lg: 20}}>
                <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                <Heading color={'purple'}>Program of studies</Heading>
                <Text py={10}>
                  The first two quarters are shared by all specialities and are
                  dedicated to studying Object-Oriented Programming and
                  cutting-edge Full-Stack Web 2.0 development. It is going to be
                  a year-long hybrid programme that includes both onsite and
                  online classes and is divided into four quarters of 13 weeks
                  each.
                </Text>
                <Button colorScheme={"purple"} size={"lg"}>
                  More info
                </Button>
                </RevealWrapper>
              </Box>
              <Box flexBasis={"50%"} my={{base: 5, lg: 10}} >
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                <Image
                  src={Image3}
                  alt={"panaverse"}
                  width={450}
                  height={450}
                ></Image>
                </RevealWrapper>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      <Course/>
      <Instructor/>
    </div>
  );
}
