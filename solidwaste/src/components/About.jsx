import React from 'react'
import Nancy from "../assets/Nancy.jpeg"

function About() {
  return (
    <div>
      <div className='realtive'>
      <div className='z-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-[70vw] mt-[14vh] mx-[15vw] flex flex-col gap-[5vw] text-[2vw] text-white bg-slate-50 bg-opacity-10 py-[2vh] rounded-md absolute'>
      <div className='flex justify-between px-[3vw]'>
        <img className='h-[10vw] w-[10vw] object-cover rounded-full' src="https://tse2.mm.bing.net/th?id=OIP.fwegneq6Tv1S1-j9ullA0wAAAA&pid=Api&P=0&h=220" alt="" />
        <div className='flex justify-center items-start flex-col w-[20vw]'>
        <h1>Name: Jyoti Gupta</h1>
        <h1>Reg no. : 12324755</h1> 
        <h1>Role: Design & Work Plan</h1>
        </div>
      </div>
      <div className='flex justify-between px-[3vw]'>
      <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={Nancy} alt="" />
        <div className='flex justify-center items-start flex-col w-[20vw]'>
        <h1>Name: Nancy Kumari</h1>
        <h1>Reg no. : 12324463</h1> 
        <h1>Role: Developer</h1>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
