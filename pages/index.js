import About from '../components/About';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Head from 'next/head';
export default function Home() {
  return (
    <div className='bg-slate-800 text-slate-200 min-h-screen flex'>
      <Head>
        <title>JUNAI TSENDAYUSH - Portofolio</title>
      </Head>
      <div className='bg-slate-700 w-0 lg:w-60'>
        <Nav className='w-0 lg:w-60'/>
      </div>
      <div className='flex-1'>
        <Hero></Hero>
        <About></About>
        <Works></Works>
      </div>
      
    </div>
  )
}
