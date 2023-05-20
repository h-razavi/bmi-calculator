import React from 'react'
import mylogo from '../assets/logo-small.jpg'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='fixed bottom-0 bg-slate-400 h-16 w-screen flex justify-center items-center gap-2'>
        <img src={mylogo} alt="HR" className='rounded-full h-12 shadow-md' />
        <p className='font-bold '>Designed and Developed by <a href='http://golosein.com/' className='text-blue-800'>Hossain Razavi</a></p>
    </footer>
  )
}

export default Footer