'use client'
import {Box, Container, Heading, Text,SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import Home from '../Component/Home'
import Link from 'next/link'
import { RevealWrapper } from 'next-reveal'

export default function page() {
  return (
    <div>
      <div>
      <Home
        title={"Syallbus"}
        src={
          "https://i0.wp.com/blockchainappfactory.files.wordpress.com/2022/02/cropped-scaled-1.jpg?ssl=1"
        }
      />
      <Box>
        <Container maxW={1400} p={10}>
          <Box textAlign={'center'}>
            <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Heading color={'purple'}>
            Course Syllabus
            </Heading>
            <Text pt={3}>
            The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.
            </Text>
            </RevealWrapper>
          </Box>
          <Box textAlign={'center'} pt={10}>
            <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Heading color={'purple'}>
            Common in All 
            </Heading>
            <Text pt={3}>
            Every participant of the program will start by completing the following three core courses:
            </Text>
            </RevealWrapper>
          </Box>
        </Container>
      </Box>
      <Box>
      <Container maxW={1400}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(3 , 1fr)" }}
          ><RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater I</Heading>
              <Text py={4}>
              CS-101: Object-Oriented Programming using TypeScript and Typescript for React.
              </Text>
             
            </Box>
          </RevealWrapper>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater II</Heading>
              <Text py={4}>
              W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform.
              </Text>
             
            </Box>
          </RevealWrapper>
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quarter III</Heading>
              <Text py={4}>
              -101: Dollar Making Bootcamp - Full-Stack Template and API Product Development.
              </Text>
              
            </Box>
          </RevealWrapper>
          </SimpleGrid>
        </Container>
      </Box>
      <Box textAlign={'center'} m={5}>
        <Container maxW={1400}>

            <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Heading color={'purple'} py={5}>
            Specialized Course
            </Heading>
            <Text pt={3}>
            After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
            </Text>
            </RevealWrapper>
        </Container>
          </Box>
          <Box>
            <Container maxW={1400}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Heading color={'purple'} textAlign={'center'} pb={5}>
               1- :  BlockChain(Web3) and Metaverse Specialization
              </Heading>
              </RevealWrapper>
            </Container>
          </Box>
          <Container maxW={1400} pb={{base: 5 , lg : 40}}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(2 , 1fr)" }}
          >
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater IV</Heading>
              <Text py={4}>
              MV-361: Developing Planet-Scale and Augmented Metaverse Experiences
              </Text>
             
            </Box>
            </RevealWrapper>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater V</Heading>
              <Text py={4}>
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
              </Text>
             
            </Box>
            </RevealWrapper>
          </SimpleGrid>
        </Container>


          <Box>
            <Container maxW={1400}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Heading color={'purple'} textAlign={'center'} py={5}>
              2- Artificial Intelligence (AI) and Deep Learning Specialization
              </Heading>
              </RevealWrapper>
            </Container>
          </Box>
          <Container maxW={1400} pb={{base : 5 , lg : 40}}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(2 , 1fr)" }}
          >
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater IV</Heading>
              <Text py={4}>
              AI-351: Developing Planet-Scale APIs and Python Programming
              </Text>
             
            </Box>
            </RevealWrapper>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>

            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater V</Heading>
              <Text py={4}>
              AI-361: Deep Learning and MLOps (Machine Learning Operations)
              </Text>
             
            </Box>
            </RevealWrapper>
          </SimpleGrid>
        </Container>


        <Box>
            <Container maxW={1400}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
              <Heading textAlign={'center'} py={5} color={'purple'}>
              3- Cloud-Native Computing Specialization
              </Heading>
              </RevealWrapper>
            </Container>
          </Box>
          <Container maxW={1400} pb={{base : 5 , lg : 40}}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(2 , 1fr)" }}
          >
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater IV</Heading>
              <Text py={4}>
              CN-351: Certified Kubernetes Application Developer (CKAD)
              </Text>
             
            </Box>
            </RevealWrapper>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater V</Heading>
              <Text py={4}>
              CN-361: Developing Multi-Cloud APIs using CDK for Terraform
              </Text>
             
            </Box>
            </RevealWrapper>
          </SimpleGrid>
        </Container>



        <Box>
            <Container maxW={1400}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>

              <Heading color={'purple'} textAlign={'center'} py={5}>
              4- Ambient Computing and IoT Specialization
              </Heading>
              </RevealWrapper>
            </Container>
          </Box>
          <Container maxW={1400} pb={{base: 4 , lg : 20}}>
          <SimpleGrid
            templateColumns={{ base: "repeat(1 , 1fr)", lg: "repeat(2 , 1fr)" }}
          >
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater IV</Heading>
              <Text py={4}>
              AC-351: Ambient Computing with Voice Assistants and Matter Devices
              </Text>
            </Box>
            </RevealWrapper>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box
              boxShadow={"dark-lg"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={4}
              m={2}
              w={{ base: "320px", lg: "75%" }}
            >
              <Heading>Quater V</Heading>
              <Text py={4}>
              AC-361: Embedded Programming using C and Rust.
              </Text>
            </Box>
            </RevealWrapper>
          </SimpleGrid>
        </Container>  

        
     
    </div>
    </div>
  )
}
