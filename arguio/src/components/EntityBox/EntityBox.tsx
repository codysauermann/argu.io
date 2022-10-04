import { Badge, Box, Center, Flex } from '@chakra-ui/react';
import { text } from 'node:stream/consumers';
import React from 'react';
import {getFact} from '../../services/Service'
type EntityBoxProps = {
    text: string;
};

const EntityBox: React.FC<EntityBoxProps> = ({ text }) => {

    return (
        <Flex>
            <><Box bg="white" borderRadius={10}>
            <Center><Badge borderRadius={5} px='1' colorScheme='teal' fontSize='1em'>
            {text}
            </Badge></Center>

            </Box>
            {() => getFact()}

            </>
            
        </Flex>


    )
}
export default EntityBox;