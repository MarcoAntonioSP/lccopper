import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header'
import Banner from '../src/components/banner/Banner'
import Structure from '../src/components/structure/Structure'
import Presentation from '../src/components/aprensentation/Presentation'
import Apresentationstructure from '../src/components/structure/Apresentation'


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Presentation />
      <Apresentationstructure />
      <Structure />
      <Footer />
    </div>
  )
}