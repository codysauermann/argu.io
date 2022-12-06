import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { Button, Input } from '@chakra-ui/react'
import { Flex, Text, Heading, Box } from '@chakra-ui/react'
import { useState } from 'react'
import Argboxes from '../components/Argboxes/Argboxes'
import Promptbox from '../components/Promptbox/Promptbox'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
const axios = require('axios');

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
const db = getFirestore(app);
const auth = getAuth(app);


const Home: NextPage = () => {
  const [inputVal, setInputVal] = useState("");

  const [buttonClicked, setButtonClicked] = useState(false);
  const [responseA, setResponseA] = useState("")
  const [responseB, setResponseB] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  }

  const callOpenAi = async (inputVal:string) => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer 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"
      },
      body: JSON.stringify({
        "model": "text-davinci-002",
        'prompt': inputVal,
        'temperature': 0.85,
        'max_tokens': 3000,

      })
    })
  
    const data = await response.json()
    console.log(data)
    
    return data.choices[0].text
  }


  const get_positions = async (inputVal:string) =>{
    const promptA = "Objectively explain why '" + inputVal + "' is reasonable in 3 points, ranked by importance."
    const responseA = await callOpenAi(promptA)
    
    setResponseA(responseA)

    const promptB = "Objectively explain why '" + inputVal + "' is unreasonable in 3 points, ranked by importance"
    const responseB = await callOpenAi(promptB)
    setResponseB(responseB)
    
    if (auth.currentUser != null) {
      const currentUserID = auth.currentUser.uid;
      pushToDatabase(currentUserID,inputVal, responseA, responseB)
    }
  }

  async function pushToDatabase(_currentUID: string,_inputVal: any, _resposeA: any, _resposeB: any) { //push current search to database
    await setDoc(doc(db, _currentUID, _inputVal), {
      for: _resposeA,
      against: _resposeB
    });
  }
  
  return (
    <Flex flexDirection="column" width="90%" margin="auto" mt={10} >
      <Box textAlign="center" py={1} px={6}>
          <Heading
            display="inline-block"
            size="xl"
            bgGradient="linear(to-r, teal.300, teal.400)"
            backgroundClip="text"
            height="50px">
            Argument Generator
          </Heading>
      </Box>

      {!buttonClicked && <>
        <Text color={'gray.500'} mb={6} fontSize='lg' textAlign="center">
          Enter a statement below to receive arguments for and against it.
        </Text>
        <Input placeholder='e.g. "We should give aid to Ukraine"' value={inputVal} onChange={handleChange} />
        <Button marginTop={3} bg="black.500" variant='outline' size='lg' onClick={() => [get_positions(inputVal),setButtonClicked(true)]}>
           Submit
        </Button>
      </>
      }
      {buttonClicked && <Promptbox text={inputVal} />}
      {buttonClicked && <Argboxes posA={responseA} posB={responseB} />} 
      {buttonClicked && <>
        <Button w='120px' alignSelf={'end'} onClick={() => {setInputVal(""),setButtonClicked(false) }}
            colorScheme={'teal'}
            bg={'teal.300'}
            rounded={'full'}
            mt={4}
            _hover={{
              bg: 'teal.400',
            }}>
              Go Back
          </Button>
      </>}

    </Flex>


  )


    }
export default Home
    

