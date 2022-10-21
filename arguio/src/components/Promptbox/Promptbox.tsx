import { Center, Flex, Box } from '@chakra-ui/react';
import React from 'react';

type PromptboxProps = {
    text: string
};

const Promptbox: React.FC<PromptboxProps> = ({ text }) => {

    return (<>
        <Center fontSize='2xl'>
            <b>Generating rationalizations for and against</b>


        </Center>
        <Box bg='gray.100' w='100%' p={4}  color="black  " borderRadius={10} marginLeft={2}>
            <Center fontSize='3xl'>
               <b> "{text}"</b>
            </Center>
        </Box>
        <Box h="30px"></Box>


    </>
    )
}
export default Promptbox;