import Head from 'next/head'
import Navbar from './Components/Navbar'
//import { Inter } from 'next/font/google'
import Section1 from './Components/Section1'
import Container2 from './Components/Container2'
import Container3 from './Components/Container3'
import Container4 from './Components/Container4'
import Container5 from './Components/Container5'

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Section1/>
    <Container2/> 
    <Container3/>
    <Container4/>
    {/* 
    <Container5/> */}
    </>
  )
}
