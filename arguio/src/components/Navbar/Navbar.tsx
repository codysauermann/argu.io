
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Icon, Input, InputGroup, useDisclosure, Text } from '@chakra-ui/react'
import router from 'next/router';
import { SetStateAction, useState } from 'react';
import { BiGitBranch, BiGitMerge, BiGitPullRequest, BiGitRepoForked, BiGridAlt } from "react-icons/bi"
import { BsPerson} from "react-icons/bs"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, InputRightElement, Badge } from '@chakra-ui/react'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" // New import


const firebaseConfig = {
    apiKey: "AIzaSyAa9Z61heACTTYjfSfGb-7wJZS71ZtSgXo",
    authDomain: "arguio-3dea1.firebaseapp.com",
    databaseURL: "https://arguio-3dea1-default-rtdb.firebaseio.com",
    projectId: "arguio-3dea1",
    storageBucket: "arguio-3dea1.appspot.com",
    messagingSenderId: "281637004163",
    appId: "1:281637004163:web:ca86746082879f9d780cb6",
    measurementId: "G-4SV6XRXG7P"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { userAgent } from 'next/server';


type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const loginModal = useDisclosure() //setup for login modal
    const [loggedIn, setloggedIn] = useState(false)
    const signUpModal = useDisclosure() //setup for sign up modal
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show) //setup to allow hide/show toggle

    const [Email, setEmail] = useState("")
    const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)

    const [password, setPassword] = useState("")
    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => setPassword(event.target.value)

    const [reEnteredPassword, setReEnteredPassword]  = useState("")
    const handleReEnteredPasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => setReEnteredPassword(event.target.value)







    const handleSignup = () => {
        console.log(Email)
        console.log(password)
        
      if (Email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      if (password != reEnteredPassword) {
        alert('Passwords do not match');
        return;
      }
      createUserWithEmailAndPassword(auth, Email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            alert("Signup successful! Please log in to user your account")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            alert(error.message)
        });
        signUpModal.onClose()
        loginModal.onClose()
    }
    const handleLogin = () => {
        console.log(Email)
        console.log(password)

        signInWithEmailAndPassword(auth, Email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          setloggedIn(true)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message)
        });

        loginModal.onClose()
    
    }
    const handleLogout = () => {
        setEmail("");
        setPassword("");
        setReEnteredPassword("");
        setloggedIn(false);
        auth.signOut();
        alert("You have been logged out!")
    }







    return ( 
            <Flex bg="teal.100" margin="auto" width="100%" height="75"  mt={2} p={4} align="center"> 
           <Icon as={BiGitRepoForked} w="75px" h = "50px" onClick={() => { router.push("/") }}/>
           
           <Box   marginBottom={2} p={1} color="black" fontSize='2em' fontWeight='bold' onClick={() => { router.push("/") }}>
                argu.io
            </Box>
            <Button leftIcon={<BiGitRepoForked />} marginLeft="20px" bg="white" color="black" variant='solid' size='lg' onClick={() => { router.push("/generate") }}>
                Generate
            </Button>

            <Button leftIcon={<BiGridAlt />} marginLeft="20px" bg="white" color="black" variant='solid' size='lg' onClick={() => { router.push("/history") }}>
                History
            </Button>
            {!loggedIn && <>
                <Button leftIcon={<BiGitMerge />} marginLeft="20px" bg="white" color="black" variant='solid' size='lg' onClick={loginModal.onOpen}>
                    Login
                </Button>
            </>}
            {loggedIn && <>
                <Button leftIcon={<BiGitMerge/>} marginLeft="20px" bg="white" color="black" variant='solid' size='lg' onClick={handleLogout}>
                    Logout
                </Button>
                
                <Button leftIcon={<BsPerson/>} marginLeft="20px" bg="white" color="black" variant='solid' size='lg'>
                    {Email}
                </Button>
            </>}
            
            
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
                            Email
                        </FormLabel>
                        <Input placeholder='Enter Email' onChange={handleEmailChange}/>
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
                                    Email
                                </FormLabel>
                                <Input placeholder='Enter Email' onChange={handleEmailChange}/>
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
                            <Button colorScheme='twitter' mr ={3} onClick={handleSignup}>
                                Sign Up
                            </Button>
                            <Button mr = {3} onClick = {signUpModal.onClose}>
                                Back
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <Button colorScheme='twitter' mr={3} onClick = {handleLogin}>
                        Login
                    </Button>
                    
                    
                </ModalFooter>
                </ModalContent>
            </Modal>

        </Flex>

    )
}
export default Navbar;