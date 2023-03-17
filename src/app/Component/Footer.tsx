'use client'
import React from 'react'
import {Box, Container, Grid, Heading, SimpleGrid, Text} from "@chakra-ui/react"
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <Box bg={'purple.800'} color={'white'} py={10} textAlign={{base : 'center', lg: 'start'}}>
        <Container maxW={1400}>
            <SimpleGrid spacingX={10} templateColumns={{base :'repeat(1, 1fr)' , lg :'repeat(4, 1fr)' }}>
                <Box>
                    <Heading>
                        About us
                    </Heading>
                    <Text color={'white'} pt={5}>
                        The future of web is web3 metaverse and cloud computing. Panaverse Dao is 
                        inistituve of PIAIC for leading the Pakisatni students in thes field
                    </Text>
                </Box>
                <Box>
                    <Heading>
                        Useful link
                    </Heading>
                   <Grid color={'white'} pt={5}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/Syllabus'}>Syalbus</Link>
                    <Link href={'/Explore'}>Explore</Link>
                    <Link href={'/about'}>About us</Link>
                    <Link href={'/Contact'}>Conatct</Link>
                   </Grid>
                </Box>
                <Box>
                    <Heading>
                        Follow us
                    </Heading>
                    <Grid color={'white'} pt={5}>
                    <Link href={'https://www.facebook.com/groups/panaverse/'}>Facebook</Link>
                    <Link href={'https://www.linkedin.com/company/panaverse/'}>Linkdln</Link>
                    <Link href={'https://twitter.com/Panaverse_edu'}>Twitter</Link>
                    <Link href={'https://www.youtube.com/@panaverse'}>Youtube</Link>
                    <Link href={'https://github.com/panaverse'}>Github</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading>
                        Contact us
                    </Heading>

                    <Box color={'white'} pt={5}>
                    <Text>
                        +92 336 346 8665
                    </Text>
                    <Text>
                        panaversedao@hotmail.com
                    </Text>
                    <Text>
                        Karachi , Pakistan
                    </Text>
                    </Box>

                </Box>
            </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}
