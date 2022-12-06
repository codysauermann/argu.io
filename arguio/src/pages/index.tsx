import type { NextPage } from 'next'
import router from 'next/router';
import {Container, Box, Text, Stack, Heading, Button} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
    <Container maxW={'4xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 32 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '7xl' }}
            lineHeight={'110%'}>
            Personalized Arguments <br />
            <Text as={'span'} color={'teal.400'}>
              For You
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            For anyone who wants to be more aware of the context surrounding 
            different social issues, our product, argu.io, is a web application 
            that enables users to discuss important social issues and view 
            different sides of an argument.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button onClick={() => { router.push("/generate") }}
              colorScheme={'teal'}
              bg={'teal.400'}
              rounded={'full'}
              px={6}
              boxShadow={
                '0px 1px 6px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'teal.500',
              }}>
              Generate
            </Button>
            <Text color={'gray.500'} fontWeight='bold'>
              Click the button to begin generating arguments.
            </Text>
          </Stack>
        </Stack>
      </Container>
      
      <Box
        pos="relative"
        bgGradient='linear(white 10%, teal.200 100%)'
        height="200px"
        w="100%"
      ></Box>
      </div>
  )
}
export default Home