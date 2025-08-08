import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
function Footer() {
    const handleClick = ()=>{
        toast.info("Subscription not available")
    }
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="Logo-Dark" className='w-40' />
                    <p className='text-gray-400 mt-4'>Brahmaputra Real Estate is committed to helping you find the perfect property with ease and confidence. From cozy homes to premium commercial spaces, we offer trusted guidance, transparent deals, and expert market insights—making your real estate journey smooth, secure, and successful.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletters</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Stay ahead in the property market with our free newsletter. Get the latest listings, market trends, and expert tips delivered straight to your inbox—helping you make smarter real estate decisions every time.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                    <button onClick={handleClick} className='cursor-pointer py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright {new Date().getFullYear()} © Pallab Duarah. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer