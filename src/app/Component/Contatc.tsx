import {Box, Button, Center, Container, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Contatc() {
  return (
    <div>
      <Box>
        <Container maxW={1400}>
            <Box boxShadow={'dark-lg'} borderRadius={'25'} m={{base: 4 , lg: 10}} w={'-moz-max-content'} p={{base: 5 , lg: 10}}>
                <Center>
                    <Flex direction={'column'}>
                    <Text size={'lg'} pt={4}>Full Name </Text>
                    <Input></Input>
                    <Text pt={4}>Email </Text>
                    <Input></Input>
                    <Text pt={4}>Message</Text>
                    <Input w={{base:56, lg : 96}} h={{base : 32, lg : 48}}></Input>
                    <Button mt={4} colorScheme={'purple'}>Submit</Button>
                    </Flex>
                </Center>
            </Box>
        </Container>
      </Box>
    </div>
  )
}
