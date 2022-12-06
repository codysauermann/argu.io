import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import {Badge, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button} from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { doc, getFirestore, getDoc, collection, query, where, getDocs, AggregateQuerySnapshot, orderBy, limit } from "firebase/firestore";
import { useState, useEffect } from "react" 
import { Console } from 'node:console'

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
const auth = getAuth(app);
const db = getFirestore(app);

const History: NextPage = () => {

  const [responseA, setResponseA] = useState("")
  const [responseB, setResponseB] = useState("")
  const [name, setName] = useState("")

  //class for returning argument data from firestore
  class ArgumentData { 
    name: string
    responseA: string
    responseB: string
    constructor(name: string, responseA: string, responseB: string) {
      this.name = name;
      this.responseA = responseA
      this.responseB = responseB
    }
  }

  //gets data from firestore
  async function GetArguData() {
    if(auth.currentUser != null) {
      const q = query(collection(db, auth.currentUser.uid), limit(6)) //query of previous 6 searchs from firestore
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const temp = doc.data();
        console.log(temp)
        setName(doc.id)
        setResponseA(temp.for)
        setResponseB(temp.against)
      });
    }
    else {
      return
    }
  } 


  //call GetArguData
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  GetArguData()
    return () => { ignore = true; }
    },[]);

  return (
    <Flex flexDirection="column" width="90%" margin="auto" mt={10} >
      {auth.currentUser == null && <>
        <Heading textAlign='center' color= "gray.500" fontWeight={600}>
          Please login in to view your history
        </Heading>
      </>}
      {auth.currentUser != null && <>
        <Heading color= "teal.400" fontWeight={600} mb = "20px" size='2xl' textAlign='center'>
          History
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
            <AccordionButton background="gray.100">
              <Box flex='1' textAlign='left' color= "black" fontSize='2xl'>
                "{name}"
              </Box>
              <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box background= "teal.100" color="black" fontSize="lg">
                Arguments For:
              </Box>
              {responseA} 
            </AccordionPanel>
            <AccordionPanel pb = {4}>
              <Box background="teal.100" color="black" fontSize="lg">
                Arguments Against:
              </Box>
              {responseB}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>}
      

    </Flex>
  )
}

export default History
