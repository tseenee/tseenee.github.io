import Head from 'next/head';
import Nav from '../components/Nav';
import Works from '../components/Works';
export default function Home() {
  return (
    <div className='bg-slate-800 text-slate-200 min-h-screen flex'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-slate-700 w-20 lg:w-60'>
        <Nav className='w-20 lg:w-60'/>
      </div>
      <div className='flex-1'>
        <main className='h-screen' id='home'>
          <div className='p-4 relative h-full'>
            <h2 className='text-3xl'>Junai Tsend-Ayush</h2>
            <div className='flex absolute top-0 bottom-0 left-0 right-0 items-center p-4'>
              <h1 className='text-7xl'>Am Developer, Lorem ipsum</h1>
            </div>
          </div>
        </main>
        <Works></Works>
      </div>
      
    </div>
  )
}
