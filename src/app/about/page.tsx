"use client";

import React from "react";
import Home from "../Component/Home";
import ZiaKhan from "../../../public/ZiaKhan.jpg";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Instructor from "../Component/instructor";
import { RevealWrapper } from  'next-reveal'
import { RevealList } from  'next-reveal'
export default function page() {
  return (
    <div>
      <Home
        title={"About"}
        src={
          "https://static.vecteezy.com/system/resources/previews/008/167/404/original/simply-soft-gradation-technology-background-free-vector.jpg"
        }
      />
      <Box>
        <Container maxW={"100%"}>
          <Flex
            mx={{ lg: "100px", base: "20px" }}
            py={{ lg: "100px", base: "20px" }}
            display={{ base: "grid", lg: "flex" }}
          >
            <Box flexBasis={"50%"} pt={4}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
              <Image src={ZiaKhan} alt="Zia" width={450} height={450}></Image>
              </RevealWrapper>
            </Box>
            <Box flexBasis={"50%"}>
              <RevealList interval={60} delay={500} origin='right'  duration={1000} distance='500px' reset={true}>
              <Box textAlign={{ base: "center", lg: "initial" }}>
                <Heading color={'purple'} pt={{ lg: 5, base: 3 }}>CEO</Heading>
                <Heading color={'purple'} py={{ lg: 2, base: "1px" }}>Zia Khan</Heading>
              </Box>
              <Text py={{ lg: 5, base: 2 }}>
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education.
              </Text>
              <Text>
                Mentor and software developer with 20+ years of expertise in
                cloud and serverless computing, software design, project
                management, and API and App development. Expert in concept,
                business modeling & strategy development for startups,
                specializing in DeFi and token economics. Mentored and trained
                hundreds of thousands of developers. Triple masters degrees in
                business administration, engineering, and finance from Arizona
                State University. Master in Economics from KU. Certified Public
                Accountant and Certified Management Accountant in USA.
              </Text>
              <Text py={5}>
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={"100%"}>
          <Flex
            mx={{ lg: "100px", base: "20px" }}
            pb={{ lg: "100px", base: "20px" }}
            display={{ base: "grid", lg: "flex" }}
          >
            <Box flexBasis={"50%"}>
              <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} >
              <Image src={logo} alt="Zia" width={450} height={450}></Image>
              </RevealWrapper>
            </Box>
            <Box flexBasis={"50%"}>
              <RevealList interval={60} delay={500} origin='right'  duration={1000} distance='500px' reset={true}>
              <Box textAlign={{ base: "center", lg: "initial" }}>
                <Heading color={'purple'} pt={{ lg: 5, base: 3 }}>Panaverse Dao</Heading>
              </Box>
              <Text py={{ lg: 5, base: 2 }}>
                The internet is without a doubt the most important technological
                development in human history. Web3 and metaverse technologies
                expand the internet as we know it by introducing novel features
                and advancements. Metaverse will make use of all aspects of
                modern technology, including 3D, VR, AR, AI, blockchain, cloud
                computing, voice computing, ambient computing, and more.
              </Text>
              <Text py={5}>
                Citi is the latest Wall Street business to give a positive
                prognosis for Web 3.0 and the Metaverse, terms used to depict a
                future internet vision centred on decentralised technologies and
                virtual worlds. Citi stated in a March 2022 research paper that
                the metaverse economy might have a total addressable market of
                up to $13 trillion and five billion people by 2030..
              </Text>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructor/>
    </div>
  );
}
