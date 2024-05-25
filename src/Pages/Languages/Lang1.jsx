import React from 'react'
import vector from '../../Assets/Vector.png'
import Frame from '../../Assets/Frame.png'
import user from '../../Assets/user.png'
import phone from '../../Assets/phone.png'
import scro from '../../Assets/scro.png'
import fi from '../../Assets/fi.png'
import deli from '../../Assets/deli.png'
import lang from '../../Assets/lang.png'
import email from '../../Assets/email.png'
import Lang2 from '../../Pages/Languages/Lang2'
import Lang3 from '../../Pages/Languages/Lang3'
import Lang4 from '../../Pages/Languages/Lang4'
import Lang5 from '../../Pages/Languages/Lang5'
import Lang6 from '../../Pages/Languages/Lang6'
import Lang7 from '../../Pages/Languages/Lang7'
import Lang8 from '../../Pages/Languages/Lang8'

import vc from '../../Assets/Careers/vc.png'




const Page1 = () => {
  return (
    <>
      <div className='h-[680px] font-Gordita position-fixed ' style={{ backgroundImage: `url(${vc})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className='h-[600px] w-[600px] ml-[918cpx] ml-[918px]' style={{ backgroundImage: `url(${Frame})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        </div>
        <div className='md:flex '>
          <div className='text-white text-4xl w-[450px] mt-[-440px] ml-[10%] '>
            <p className='w-[400px] text-4xl text-bold'>Professional & Native Chinese Translations</p>
          </div>

          <div className="flex flex-wrap  w-[550px] justify-between p-8 ml-[200px] bg-white rounded-lg mt-[-440px] z-40 ">

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


        <Lang2 />
        <Lang3 />
        <Lang4 />
        <Lang5 />
        <Lang6 />
        <Lang7 />
        <Lang8 />

      </div>
    </>
  )
}

export default Page1