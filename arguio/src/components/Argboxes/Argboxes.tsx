import { Badge, Box, Button, ButtonGroup, Center, Divider, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react';
import EntityBox from '../EntityBox/EntityBox';
type ArgboxesProps = {

};

const Argboxes: React.FC<ArgboxesProps> = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const posA = "Ukraine is a country that is in transition and is working to reform its economy and political system. Second, Ukraine has a large population and astrategic location, making it important to stability in the region. Third, Ukraine has been avictim of Russian aggression, and giving aid will help to offset Russian influence. Finally, giving aid to Ukraine will help to promote democracy and human rights in the country."
    const posB = "There are many reasons why giving aid to Ukraine is unreasonable. First, Ukraine is a country with a history of corruption, and it is not clear that the aid would be used effectively.Second, Ukraine is in a difficult financial situation, and it is not clear that it wouldbe able to repay the aid. Third, there is a risk that the aidwould be used to finance military action against Russia, which could lead to a wider conflict."
    const numEntities_posA = 4;
    const numEntities_posB = 4;
    var posA_entityColumns = 0;
    var posB_entityColumns = 0;

    if (numEntities_posA <4){
        posA_entityColumns = numEntities_posA
    }
    else{
        posA_entityColumns = 4
    }

    if (numEntities_posB <4){
        posB_entityColumns = numEntities_posB
    }
    else{
        posB_entityColumns = 4
    }

    return (
        <Flex>
            <SimpleGrid columns={2} spacing={10}>
                <Box bg='gray.100' w='100%' p={4} color='grey' borderRadius={10} marginLeft={2}>
                    <Center><Badge borderRadius={5} px='2' colorScheme='teal' fontSize='1.25em'>
                        For
                    </Badge></Center>
                    <Box margin="auto">"{posA}"
                    </Box>
                </Box>
                <Box bg='gray.100' w='100%' p={4} color='grey' borderRadius={10} marginLeft={2}>
                    <Center><Badge borderRadius={5} px='2' colorScheme='teal' fontSize='1.25em'>
                        Against
                    </Badge></Center>
                    <Box margin="auto">"{posB}"
                    </Box>
                </Box>

                <Box bg='gray.100' w='100%' p={4} color='grey' borderRadius={10} marginLeft={2}>
                    <Center><Badge borderRadius={5} px='2' colorScheme='teal' fontSize='1.25em' marginBottom={2}>
                        Entities
                    </Badge></Center>
                    <Box margin="auto">
                    <SimpleGrid columns={numEntities_posA} spacing={10}>
                    <EntityBox text="Entity Name"></EntityBox>
                    <EntityBox text="Entity Name"></EntityBox>
                    <EntityBox text="Entity Name"></EntityBox>
                    <EntityBox text="Entity Name"></EntityBox>
                    <EntityBox text="Entity Name"></EntityBox>
                    <EntityBox text="Entity Name"></EntityBox>
                    </SimpleGrid>
                    </Box>
                </Box>
            </SimpleGrid>
        </Flex>


    )
}
export default Argboxes;