
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import router from 'next/router';
import { useState } from 'react';
type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Flex bg="cyan.400" margin="auto" width="90%" height="75" borderRadius="20px" mt={2} p={4} align="center">
            <Button marginLeft="20px" bg="black.500" variant='ghost' size='lg' onClick={() => { router.push("/") }}>
                Home
            </Button>

            <Button marginLeft="20px" bg="black.500" variant='ghost' size='lg' onClick={() => { router.push("/history") }}>
            Argument Page
            </Button>

        </Flex>

    )
}
export default Navbar;