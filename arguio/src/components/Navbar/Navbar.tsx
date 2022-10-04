
import { Box, Button, ButtonGroup, Flex, Icon } from '@chakra-ui/react'
import router from 'next/router';
import { useState } from 'react';
import { BiGitRepoForked, BiGridAlt } from "react-icons/bi"
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Flex bg="teal.100" margin="auto" width="90%" height="75" borderRadius="20px" mt={2} p={4} align="center">
           <Icon as={BiGitRepoForked} w="75px" h = "50px"/>
           
           <Box   marginBottom={2} p={1} color="yellow" fontSize='2em' onClick={() => { router.push("/") }}>
                argu.io
            </Box>
            <Button leftIcon={<BiGitRepoForked />} marginLeft="20px" bg="white" color="grey" variant='solid' size='lg' onClick={() => { router.push("/") }}>
                Generate
            </Button>

            <Button leftIcon={<BiGridAlt />} marginLeft="20px" bg="white" color="grey" variant='solid' size='lg' onClick={() => { router.push("/history") }}>
            History
            </Button>

        </Flex>

    )
}
export default Navbar;