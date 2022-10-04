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
      <Input placeholder='e.g. "We should give aid to Ukraine"' value={inputVal} onChange={handleChange}/>
        <Button marginTop={3} bg="black.500" variant='outline' size='lg' onClick={()=>setButtonClicked(true)}>
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
