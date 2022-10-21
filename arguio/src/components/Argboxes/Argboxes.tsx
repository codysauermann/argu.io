import { Badge, Box, Button, ButtonGroup, Center, Divider, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react';
import EntityBox from '../EntityBox/EntityBox';
type ArgboxesProps = {
    posA: string,
    posB: string
};

const Argboxes: React.FC<ArgboxesProps> = ({ posA, posB }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    // const posA = "Ukraine is a country that is in transition and is working to reform its economy and political system. Second, Ukraine has a large population and astrategic location, making it important to stability in the region. Third, Ukraine has been avictim of Russian aggression, and giving aid will help to offset Russian influence. Finally, giving aid to Ukraine will help to promote democracy and human rights in the country."
    // const posB = "There are many reasons why giving aid to Ukraine is unreasonable. First, Ukraine is a country with a history of corruption, and it is not clear that the aid would be used effectively.Second, Ukraine is in a difficult financial situation, and it is not clear that it wouldbe able to repay the aid. Third, there is a risk that the aidwould be used to finance military action against Russia, which could lead to a wider conflict."



    return (
        <Flex>
            <SimpleGrid columns={2} spacing={10}>
                <Box bg='gray.100' w='100%' p={4} color='black' borderRadius={10} marginLeft={2}>
                    <Box borderRadius={5} px='2'bg='teal.100' w='100%' color='black' fontSize='1.25em' align='center'>
                        <b>FOR</b>
                    </Box>
                    <Box margin="auto">{posA}
                    </Box>
                </Box>
                <Box bg='gray.100' w='100%' p={4} color='black' borderRadius={10} marginLeft={2}>
                <Box borderRadius={5} px='2'bg='teal.100' w='100%' color='black' fontSize='1.25em' align='center'>
                        <b>AGAINST</b>
                    </Box>
                    <Box margin="auto">{posB}
                    </Box>
                </Box>
{/* 
                <Flex bg='gray.100' w='100%' p={4} color='grey' borderRadius={10} marginLeft={2} flexDirection="column">
                    <Center><Badge borderRadius={5} px='2' colorScheme='teal' fontSize='1.25em' marginBottom={2}>
                        Entities
                    </Badge></Center>

                    <Flex w ="100%" flexWrap="wrap" justifyContent="center">
                            <EntityBox text="Entity Name"></EntityBox>
                            <EntityBox text="Entity Name"></EntityBox>
                            <EntityBox text="Entity Name"></EntityBox>
                            <EntityBox text="Entity Name"></EntityBox>
                            <EntityBox text="Entity Name"></EntityBox>
                            <EntityBox text="Entity Name"></EntityBox>
                    </Flex>
                </Flex> */}
            </SimpleGrid>
        </Flex>


    )
}
export default Argboxes;