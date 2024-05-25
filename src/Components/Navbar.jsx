// import React from 'react'
import React, { useState } from 'react';
import mail from '../Assets/mail.png'
import log from '../Assets/log.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-transparent'>

            <nav className="bg-[#101D2E] text-white bg-transparent'">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="-ml-2 mr-6 flex items-center">
                                <img src={log} alt="" />
                            </div>
                            <div className="hidden md:flex">
                                <a href="/" className="px-3 py-2 rounded-md text-sm font-medium ">Home</a>
                                <a href="/about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium ">About</a>
                                <a href="certified1" className="ml-4 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                <a href="/lang1" className="ml-4 px-3 py-2 rounded-md text-sm font-medium">Languages</a>
                                <a href="/industry" className="ml-4 px-3 py-2 rounded-md text-sm font-medium ">ePayments</a>
                                <a href="/car1" className="ml-4 px-3 py-2 rounded-md text-sm font-medium ">Blog</a>
                                <a href="/page1" className="ml-4 px-3 py-2 rounded-md text-sm font-medium ">Contact</a>

                            </div>
                        </div>
                        <div className="flex items-center">
                            <a href="mailto:info@lettercrafts.org" className="ml-4 px-3 py-2 rounded-md text-sm font-medium rounded-full bg-[#3D65FF] hover:bg-blue-700">info@lettercrafts.org</a>
                            <a href="tel:+651710135" className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-[#3D65FF] rounded-full hover:bg-blue-700">+65 6710135</a>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    )
}
export default Navbar