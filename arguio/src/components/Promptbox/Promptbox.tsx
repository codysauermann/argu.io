import { Center, Flex } from '@chakra-ui/react';
import React from 'react';

type PromptboxProps = {
    text: string
};

const Promptbox:React.FC<PromptboxProps> = ({text}) => {
    
    return (<>
        <Center fontSize='2xl'>
    Generating birationalizations for


    </Center>
    <Center fontSize='6xl'>
    "{text}"


    </Center>
    </>
    )
}
export default Promptbox;