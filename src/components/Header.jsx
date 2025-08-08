import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { tr } from "framer-motion/m"
function Header() {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <motion.div
            initial={{opacity: 0, y:100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
              className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[70px] inline-block max-w-4xl font-semibold pt-20'>Welcome to Brahmaputra Real Estate</h2>
                <h3 className='text-3xl sm:text-4xl md:text-[20px] inline-block max-w-3xl font-light pt-5'>Your trusted partner in finding the perfect place to call home.</h3>
                <div className='space-x-6 mt-16'>
                    <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
                    <a href='#Contact' className='px-8 py-3 rounded bg-blue-500'>Conatct us</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Header