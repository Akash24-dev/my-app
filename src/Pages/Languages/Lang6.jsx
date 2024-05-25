import React from 'react'
import m1 from '../../Assets/m1.png'
import m2 from '../../Assets/m2.png'
import m3 from '../../Assets/m3.png'
import m4 from '../../Assets/m4.png'
import line from '../../Assets/line.png'

const Lang6 = () => {
  return (
    <div className='h-[900px]'> 
<div className='mt-[100px]'>
        <div className=' h-auto pb-10'>
    <h2 className=' text-center py-20 text-[20px] md:text-[26px] lg:text-[36px] font-medium pb-10 '>Translation Process</h2>
      
      <div className='hidden md:grid place-content-center '>
            <img className='' src={line} alt="" />
      </div>

      <div className='lg:mt-[-40%] md:mt-[-65%] md:grid place-content-center'>
      <div className='ml-5 md:ml-0 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
         <div className=' grid place-content-center '>
            <img className='mt-2 lg:mt-5' src={m1} alt="" />
         </div>
        
         <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
            <div className='grid place-content-center '>
              <img className='mt-2 lg:mt-5' src={m2} alt="" />
            </div>
          </div>
          <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
            <div className='grid place-content-center '>
              <img className='mt-2 lg:mt-5' src={m3} alt="" />
            </div>
          </div>
          <div className='mt-24 h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] bg-blue-500 rounded-full'>
            <div className='grid place-content-center '>
              <img className='mt-2 lg:mt-5' src={m4} alt="" />
            </div>
          </div>
      </div>
      </div>

    <div>
      <div className='ml-28 mt-[-13%] md:ml-[2%] md:mt-[-9%] lg:ml-[12%] lg:mt-[-5%]'>
        <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg shadow-lg'>
            <div className='ml-4 py-2'>
              <p className='font-medium lg:text-[16px]'>Get a quote</p>
              <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Email your documents to <span className='text-[#3D65FF]'>info@lettercarfts.org</span> or fill up a short form to get a quote in 30 mins. </p>
            </div>
        </div>
      </div>
      <div className='ml-28 mt-[15%] md:ml-[58%] md:mt-[9%] lg:ml-[56%] lg:mt-[5%]'>
        <div className='h-auto w-[90%]  md:w-[90%]  lg:w-[77%] bg-white rounded-lg shadow-lg'>
            <div className='ml-4 py-2'>
              <p className='font-medium lg:text-[16px]'>We begin translation</p>
              <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Industry experts and native language translators work on your requirements.</p>
            </div>
        </div>
      </div>
      <div className='ml-28 mt-[17%] md:ml-[2%] md:mt-[8%] lg:ml-[12%] lg:mt-[5%]'>
        <div className='h-auto w-[90%]  md:w-[41%]  lg:w-[35%] bg-white rounded-lg shadow-lg'>
            <div className='ml-4 py-2'>
              <p className='font-medium lg:text-[16px]'>Receive translation</p>
              <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>Translated documents can be emailed or delivivered to your address.</p>
            </div>
        </div>
      </div>
      <div className='ml-28 mt-[17%] md:ml-[58%] md:mt-[8%] lg:ml-[56%] lg:mt-[7%]'>
        <div className='h-auto w-[90%]  md:w-[90%] lg:w-[77%] bg-white rounded-lg shadow-lg'>
            <div className='ml-4 py-2'>
              <p className='font-medium lg:text-[16px]'>Post translation support</p>
              <p className='text-[12px] md:text-[13px] lg:text-[16px] mt-2 text-[#697587]'>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</p>
            </div>
        </div>
      </div>

      </div>
</div>

    </div>

    </div>
  )
}

export default Lang6