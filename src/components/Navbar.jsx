import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    useEffect(()=>{
        if(mobileMenu){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        };
    }, [mobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z10'>
        <div className='container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
            <img src= {assets.logo} alt ='Nav logo' className='w-40'/>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href = "#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href = "#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href = "#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href = "#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-black hover:bg-white text-white hover:text-black px-8 py-2 rounded-4xl cursor-pointer'>Sign up</button>
            <img onClick={() => setMobileMenu(true)} src={assets.menu_icon} alt="menu-icon" className='md:hidden w-7 cursor-pointer'/>
        </div>
        {/* ------------Mobile-Menu------------ */}
        <div className={`md:hidden ${mobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setMobileMenu(false)} src={assets.cross_icon} alt="Cross-icon" className='w-6' />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 teext-lg font-medium'>
                <a onClick={() => setMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={() => setMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={() => setMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={() => setMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar