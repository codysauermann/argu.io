import { Text, Badge, Box, Center, Flex } from '@chakra-ui/react';
import { text } from 'node:stream/consumers';
import React from 'react';
import { getFact } from '../../services/Service'
type EntityBoxProps = {
    text: string;

};





const EntityBox: React.FC<EntityBoxProps> = ({ text }) => {

    // const response = getFact()





    return (
        <Flex marginLeft={3} bg="white" h="100px" w="40%" flexDirection="column" mb={3}>
            <>
            <Badge borderRadius={5} px='2' colorScheme='teal' fontSize='1.25em' marginBottom={2}>{text}</Badge>
                <Text> asdasd</Text>

            </>

        </Flex>


    )
}
export default EntityBox;