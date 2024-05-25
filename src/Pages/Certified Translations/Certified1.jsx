import React from 'react'
import vector from '../../Assets/Vector.png'
import Frame from '../../Assets/Frame.png'
import deli from '../../Assets/deli.png'
import lang from '../../Assets/lang.png'
import email from '../../Assets/email.png'
import user from '../../Assets/user.png'
import phone from '../../Assets/phone.png'
import scro from '../../Assets/scro.png'
import fi from '../../Assets/fi.png'
import Certified3 from '../../Pages/Certified Translations/Certified3'
import Certified2  from '../../Pages/Certified Translations/Certified2'
import Certified4 from '../../Pages/Certified Translations/Certified4'
import Certified5 from  '../../Pages/Certified Translations/Certified5'
import Certified6 from '../../Pages/Certified Translations/Certified6'
const Certified1 = () => {
  return (
    <> 
    <div className=' h-[680px] font-Gordita position-fixed' style={{ backgroundImage: `url(${vector})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className='h-[600px] w-[600px] ml-[900px]' style={{ backgroundImage: `url(${Frame})`, backgroundSize: "cover", backgroundPosition: "center" }}>

      </div>

      <div className='md:flex '>
          <div className='text-white text-4xl w-[450px] mt-[-440px] ml-[10%] '>
           
        <div className=" text-white p-8">
            <div className="flex flex-col gap-4 mt-[-100px]">
                <h1 className="text-3xl font-bold text-4xl ">Certified & Notarised Translations in  Singapore</h1>
                {/* <img src="https://placehold.co/50x30" alt="Singapore Flag" className="self-start"> */}
                <p className="text-lg">
                    If you are moving into Singapore or moving to a different country, there
                    are a wealth of personal documents that you will need translate.
                </p>
                <p className="text-lg">
                    Embassies, State Court, MOM, MOE, LTA and ACRA. The ICA requires
                    that the translated documents for visa applications are also notarised
                    and authenticated by SAL. We arrange this for you as part of our
                    Certified Translations service.
                </p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white text-base w-[450px] py-2 rounded">
  Personal Documents Translation : $40 only and No GST.
</button>
            </div>
        </div>
  
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
        <Certified2/>
        <Certified3/>
        <Certified4/>
        <Certified5/>
        <Certified6/>
    </div>
    </>
  )
}

export default Certified1