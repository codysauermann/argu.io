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
const axios = require('axios');




// const { Configuration, OpenAIApi } = require("openai");
//   [.const configuration = new Configuration({
//   apiKey: "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",
//   })
// const openai = new OpenAIApi(configuration);






const Home: NextPage = () => {
  const [inputVal, setInputVal] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [responseA, setResponseA] = useState("")
  const [responseB, setResponseB] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  }

  const callOpenAi = async (inputVal:string) => {
    console.log(inputVal)

// try {
      
// const response = await openai.createCompletion("text-davinci-002", {
// prompt: "Write a blog post on vadala onions",
// temperature: 0.7,
// max_tokens: 50,
// top_p: 1,
// frequency_penalty: 0,
// presence_penalty: 0,
// });

// console.log(response.choices[0].text);

//   setResponseA(response.choices[0].text)
// } catch (error) {
//   setResponseA("Error")
// }



    try {
      const response = await axios.get('https://catfact.ninja/fact');
      console.log('response  ', response.data.fact)
      setResponseB(response.data.fact)
    } catch (error) {
      setResponseB("Error")
    }
  }



  

  
  return (

    <Flex flexDirection="column" width="90%" margin="auto" mt={10} >
      {!buttonClicked && <>
        <Input placeholder='e.g. "We should give aid to Ukraine"' value={inputVal} onChange={handleChange} />
        <Button marginTop={3} bg="black.500" variant='outline' size='lg' onClick={() => [callOpenAi(inputVal),setButtonClicked(true)]}>
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
    