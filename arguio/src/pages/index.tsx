import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { Button, Input } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Argboxes from '../components/Argboxes/Argboxes'
import Promptbox from '../components/Promptbox/Promptbox'
const API_KEY="Bearer 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"
const axios = require('axios');



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
        'Authorization': API_KEY
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
    
  }
  return (
    <Flex flexDirection="column" width="90%" margin="auto" mt={10} >
      {!buttonClicked && <>
        <Input placeholder='e.g. "We should give aid to Ukraine"' value={inputVal} onChange={handleChange} />
        <Button marginTop={3} bg="black.500" variant='outline' size='lg' onClick={() => [get_positions(inputVal),setButtonClicked(true)]}>
          Submit
        </Button>
      </>
      }
      {buttonClicked && <Promptbox text={inputVal} />}
      {buttonClicked && <Argboxes posA={responseA} posB={responseB} />} 

    </Flex>


  )


    }
export default Home
    