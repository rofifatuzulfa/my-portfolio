import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[#F4EBF0] h-full w-full'>
      {/* <Head>
        <title>Rofifatuz Zulfa | Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head> */}
      <div className='fixed w-full h-auto'><Navbar /></div>
      <div className='bg-[#F5D3EE] py-3'>
        <div className='sm:flex justify-between px-10 sm:py-20 py-6 items-center mt-10'>
          <div className='sm:py-5 pb-10'>
            <h3 className='text-4xl mb-5 text-[#894862] font-bold sm:text-left text-center'>Hi, I'm</h3>
            <h1 className='text-6xl mb-5 text-[#926893] font-bold sm:text-left text-center'>Rofifatuz Zulfa Darwista</h1>
            <h3 className='text-4xl text-[#894862] font-bold sm:text-left text-center'>A Dedicated and Joyful Frontend Developer</h3>
            <div className='mt-20'>
              <button className='mr-5 rounded-full text-[#894862] font-semibold border-[1px] border-[#894862] px-3 py-[1px] bg-[#F4EBF0] hover:bg-[#894862] hover:text-[#F4EBF0] active:bg-[#F4EBF0] active:text-[#894862]'>About</button>
              <button>Works</button>
              <button>Contact</button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image src="/foto.jpg" width={500} height={500} className='object-cover rounded-full'/>
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}
