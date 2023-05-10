import Head from 'next/head'
import { Outfit } from 'next/font/google'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Section from './Components/Section'
import BoxSection from './Components/BoxSection'
import BoxSection2 from './Components/BoxSection2'
import VideoSection from './Components/VideoSection'

const inter= Outfit({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <Section/>
      <BoxSection/>
      <BoxSection2/>
      <VideoSection/>
    </>
  )
}
