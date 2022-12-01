import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import {Flex } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { doc, getFirestore, getDoc, collection, query, where, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "",
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

  //converts data from firestore into argument data class
  const argumentConverter = {
    fromFirestore: (snapshot: any, options: any) => {
      const data = snapshot.data(options);
      return new ArgumentData(data.name, data.responeA, data.responseB);
    }
  }

  return (
    <Flex>Old</Flex>
  )
}

export default History
