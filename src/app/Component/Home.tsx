import { Container,Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Home(prop:any) {
  return (
    <Box bgImage={prop.src} py={'200px'} bgSize={'cover'} bgAttachment={'fixed'}>
        <Container maxW={1400} color={'white'}>
            <Heading>
                {prop.title}
            </Heading>
        </Container>
    </Box>
  )
}
 