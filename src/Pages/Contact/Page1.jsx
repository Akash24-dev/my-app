import React from 'react'
import vec from '../../Assets/Contact/vec.png'
import Frame from '../../Assets/Contact/Frame.png'
import fr68 from '../../Assets/fr68.png'
import user from '../../Assets/user.png'
import phone from '../../Assets/phone.png'
import scro from '../../Assets/scro.png'
import fi from '../../Assets/fi.png'
import deli from '../../Assets/deli.png'
import lang from '../../Assets/lang.png'
import email from '../../Assets/email.png'
import map2 from '../../Assets/Contact/map2.svg'


const Page1 = () => {
  return (
  
      <div className='  h-[1400px] font-Gordita position-fixed' style={{ backgroundImage: `url(${map2})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className='h-[680px] font-Gordita position-fixed' style={{ backgroundImage: `url(${vec})`, backgroundSize: "cover", backgroundPosition: "center" }}>

          <div className='h-[600px] w-[600px] ml-[920px]' style={{ backgroundImage: `url(${Frame})`, backgroundSize: "cover", backgroundPosition: "center" }}>

          </div>
          <div className=" text-white p-6 max-w-lg mx-auto rounded-lg mt-[-450px] ml-[70px]">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Servcorp, Suntec Tower Three, #42-01, 8 Temasek Boulevard Singapore 038988</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v6m2 4H7m2 0a2 2 0 110-4h0a2 2 0 110 4zm3-7h8m0 0a2 2 0 110 4h-8m8-4v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 110 4H5" />
                </svg>
                <p>+65 8695 7260</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v6m2 4H7m2 0a2 2 0 110-4h0a2 2 0 110 4zm3-7h8m0 0a2 2 0 110 4h-8m8-4v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 110 4H5" />
                </svg>
                <p>+65 6711 0135</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm-1 4H9v4h6V6z" />
                </svg>
                <p>info@lettercrafts.org</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 6c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zM12 4C9.236 4 7 6.236 7 9s2.236 5 5 5 5-2.236 5-5-2.236-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                <p>09.00 AM-06.30 PM</p>
              </div>
            </div>
          </div>




          <div className="flex flex-wrap  w-[550px] justify-between p-8 ml-[800px] bg-white rounded-lg mt-[-310px] z-40 ">

            <div className="w-full lg:w-1/2 p-4 ">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-black">Send us a message</h2>
              <form className="space-y-4  mt-[40px]">
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={user} alt="" />
                  </div>
                  <input type="text" placeholder="Name" className=" pl-14 w-[472px] p-2 border border-zinc-300 dark:border-zinc-400 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={email} alt="" />
                  </div>
                  <input type="email" placeholder="E-mail" className="w-[472px] pl-14 p-2 border border-zinc-300 dark:border-zinc-400 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={phone} alt="" />
                  </div>
                  <input type="tel" placeholder="Phone" className="w-[472px] pl-14 p-2 border border-zinc-300 dark:border-zinc-400 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={scro} alt="" />
                  </div>
                  <input type="text" placeholder="Source Language" className="w-[472px] pl-14 p-2 border border-zinc-400 dark:border-zinc-600 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={lang} alt="" />
                  </div>
                  <input type="text" placeholder="To Language" className="w-[472px] pl-14 p-2 border border-zinc-400 dark:border-zinc-600 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px]  mx-[15px]'>
                    <img className='w-[25px]' src={deli} alt="" />
                  </div>
                  <input type="text" placeholder="Delivery Options" className="w-[472px] px-14 pl-12 p-2 border border-zinc-400 dark:border-zinc-600 rounded" />
                </div>
                <div className='relative'>
                  <div className='absolute mt-[10px] mx-[15px]'>
                    <img className='w-[25px]' src={fi} alt="" />
                  </div>
                  <textarea placeholder="Your Message" className="w-[472px] p-2 pl-12  border border-zinc-300 dark:border-zinc-400 rounded"></textarea>
                </div>
                <button type="submit" className="w-[152px] bg-blue-500 text-white p-2 rounded-full">Send Message</button>
              </form>
            </div>
          </div>




          
        </div>
      </div>
  
  )
}

export default Page1