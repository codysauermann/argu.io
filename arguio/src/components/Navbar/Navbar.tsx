
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Icon, Input, InputGroup, useDisclosure, Text } from '@chakra-ui/react'
import router from 'next/router';
import { SetStateAction, useState } from 'react';
import { BiGitBranch, BiGitMerge, BiGitPullRequest, BiGitRepoForked, BiGridAlt } from "react-icons/bi"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, InputRightElement, Badge } from '@chakra-ui/react'

type NavbarProps = {

};


const Navbar: React.FC<NavbarProps> = () => {
    const loginModal = useDisclosure() //setup for login modal
    const signUpModal = useDisclosure() //setup for sign up modal
    
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show) //setup to allow hide/show toggle

    const [username, setUsername] = useState("Not Logged In")
    const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => setUsername(event.target.value)
    const resetUsername = (event: any) => setUsername("Not Logged In")

    const [password, setPassword] = useState("")
    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => setPassword(event.target.value)

    const [reEnteredPassword, setReEnteredPassword]  = useState("")
    const handleReEnteredPasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => setReEnteredPassword(event.target.value)

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
            
            <Button leftIcon={<BiGitMerge />} marginLeft="20px" bg="white" color="grey" variant='solid' size='lg' onClick={loginModal.onOpen}>
                Login
            </Button>
            
            <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose}>
                <ModalOverlay /> 
                <ModalContent>
                <ModalHeader>
                    Login
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb = {6}>
                    <FormControl>
                        <FormLabel>
                            Username
                        </FormLabel>
                        <Input placeholder='Enter Username' onChange={handleUsernameChange}/>
                    </FormControl>

                    <FormControl mt = {4}>
                        <FormLabel>
                            Password
                        </FormLabel>
                        <InputGroup>
                            <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter Password' onChange={handlePasswordChange}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                  {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button mr={250} onClick = {signUpModal.onOpen}>
                        Sign Up
                    </Button>
                    <Modal isOpen={signUpModal.isOpen} onClose={signUpModal.onClose}>
                        <ModalOverlay/>
                        <ModalContent>
                        <ModalHeader>
                            Sign Up
                        </ModalHeader>
                        <ModalBody pb = {6}>
                            <FormControl>
                                <FormLabel>
                                    Username
                                </FormLabel>
                                <Input placeholder='Enter Username' onChange={handleUsernameChange}/>
                            </FormControl>
                            
                            <FormControl mt = {4}>
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <InputGroup>
                                    <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter Password' onChange={handlePasswordChange}/>
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <FormControl mt = {4}>
                                <FormLabel>
                                    Re-Enter Password
                                </FormLabel>
                                <InputGroup>
                                    <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Re-Enter Password' onChange={handleReEnteredPasswordChange}/>
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='twitter' mr ={3}>
                                Sign Up
                            </Button>
                            <Button mr = {3} onClick = {signUpModal.onClose}>
                                Back
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Button colorScheme='twitter' mr={3} onClick = {loginModal.onClose}>
                        Login
                    </Button>
                    
                    
                </ModalFooter>
                </ModalContent>
            </Modal>

        </Flex>

    )
}
export default Navbar;