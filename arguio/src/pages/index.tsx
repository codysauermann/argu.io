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

const Home: NextPage = () => {
  const [inputVal, setInputVal] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
}

  return (

    <Flex flexDirection="column" width="90%" margin="auto" mt={10} >
      {!buttonClicked &&<>
      <Input placeholder='Argument' value={inputVal} onChange={handleChange}/>
        <Button marginLeft="20px" bg="black.500" variant='ghost' size='lg' onClick={()=>setButtonClicked(true)}>
              Submit
        </Button>
        </>
      }
        {buttonClicked && <Promptbox text={inputVal}/>}
        {buttonClicked && <Argboxes/>}
        
    </Flex>
    
  
  )
}

export default Home
