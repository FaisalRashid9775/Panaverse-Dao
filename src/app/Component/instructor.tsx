import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";

export default function Instructor() {
  return (
    <div>
      <Box mb={20}>
        <Container maxW={1400}>
          <Box py={{base: 10, lg:20}}>
            <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
            <Center>
              <Heading  color={'purple'}>Our Instructor</Heading>
            </Center>
            </RevealWrapper>
          </Box>
          <SimpleGrid 
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(5, 1fr)" }}
          >
            
              <Box mb={5}>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
              <Center>
                  <Image
                    src={"ZiaKhan.jpg"} alt={'Zia'}
                    h={90}
                    w={90}
                    borderRadius={"full"}
                  ></Image>
                </Center>
                
                  <Heading textAlign={'center'}>Zia Khan</Heading>
                  <Text textAlign={'center'}>CEO Panaverse DAO</Text>
                  <Text textAlign={'center'}>Faculty Member of Panaverse Dao</Text>
                  </RevealWrapper>
              </Box>
              <Box mb={5}>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                <Center>
                  <Image
                    src={"zEESHAN.jpg"}
                    h={90}
                    w={90}
                    borderRadius={"full"} alt={'zeeshan'}
                  ></Image>
                </Center>
                <Box textAlign={"center"}>
                  <Heading>Zeeshan Hanif</Heading>
                  <Text>Head of Panaverse DAO</Text>
                  <Text>Faculty Member of Panaverse Dao</Text>
                </Box>
                </RevealWrapper>
              </Box>
              <Box mb={5}>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                <Center>
                  <Image
                    src={"Adil.jpg"}
                    h={90}
                    w={90}
                    borderRadius={"full"} alt={"adil"}
                  ></Image>
                </Center>
                <Box textAlign={"center"}>
                  <Heading>Adil Altaf</Heading>
                  <Text>Team Lead Panaverse DAO</Text>
                  <Text>Faculty Member of Panaverse Dao</Text>
                </Box>
                </RevealWrapper>
              </Box>
              <Box mb={5}>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                <Center>
                  <Image
                    src={"Hira.webp"}
                    h={90}
                    w={90}
                    borderRadius={"full"} alt={'hira'}
                  ></Image>
                </Center>
                <Box textAlign={"center"}>
                  <Heading>Hira Khan</Heading>
                  <Text>Team Lead Panaverse DAO</Text>
                  <Text>Faculty Member of Panaverse Dao</Text>
                </Box>
                </RevealWrapper>
              </Box>
              <Box mb={5}>
                <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>

                <Center>
                  <Image
                    src={"Daniyal.jpg"}
                    h={90}
                    w={90}
                    borderRadius={"full"} alt={'daniyal'}
                  ></Image>
                </Center>
                <Box textAlign={"center"}>
                  <Heading>Daniyal Nagori</Heading>
                  <Text>COO Panaverse DAO</Text>
                  <Text>Faculty Member of Panaverse Dao</Text>
                </Box>
                </RevealWrapper>
              </Box>
            
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
