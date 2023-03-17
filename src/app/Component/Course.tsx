import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

export default function Course() {
  return (
    <div>
      <Box>
        <Container maxW={1400}>
          <Box pb={{base:4, lg:20}}>
            <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Heading textAlign={"center"} color={"purple"}>
              Our Top Courses
            </Heading>
            </RevealWrapper>
          </Box>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(3 , 1fr)" }}
          >
            
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={4}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Cloud Computing</Heading>
              <Text py={4}>
                We offera one year Cloud Computing program for Pakistan
                Student. This contain four Quarter
              </Text>
              <Button colorScheme={"purple"}>
                <Link href={"/Syllabus"}>More Info</Link>
              </Button>
            </Box>
                </RevealWrapper>
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={4}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>MetaVerse</Heading>
              <Text py={4}>
                We offera one year MetaVerse program for Pakistan Student. This
                contain four Quarter
              </Text>
              <Button colorScheme={"purple"}>
                <Link href={"/Syllabus"}>More Info</Link>
              </Button>
            </Box>
                </RevealWrapper>
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={4}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>BolockChain</Heading>
              <Text py={4}>
                We offera one year Blockchain program for Pakistan Student. This
                contain four Quarter
              </Text>
              <Button colorScheme={"purple"}>
                <Link href={"/Syllabus"}>More Info</Link>
              </Button>
            </Box>
                </RevealWrapper>
          </SimpleGrid>
        </Container>
      </Box>
      <Box my={{base: 2 , lg : 7}}>
        <Container maxW={1400}>
            <Center>
                <RevealWrapper  origin='top' delay={200} duration={1000} distance='500px' reset={true}>
          <Box boxShadow={'dark-lg'} borderRadius={'40px'} p={10} my={10} w={{base: '300px', lg : '700px'}} textAlign={"center"}>
            <Heading color={'purple'}>Program in a Nutshell</Heading>
            <Heading pt={3}>Earn while you Learn</Heading>
            <Text pt={3}>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the programs beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
          </Box>
                </RevealWrapper>
            </Center>
        </Container>
      </Box>
    </div>
  );
}
