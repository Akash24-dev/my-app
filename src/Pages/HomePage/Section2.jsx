import React from 'react'
import logo from '../../Assets/logo.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import panna from '../../Assets/panna.png'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
import icon5 from '../../Assets/icon5.png'
import icon6 from '../../Assets/icon6.png'
import icon7 from '../../Assets/icon7.png'
import icon8 from '../../Assets/icon8.png'
import icon9 from '../../Assets/icon9.png'
import Section3 from '../../Pages/HomePage/Section3'





const Component2 = () => {
  return (
    <>
      <div className='mt-[100px]' >

        <div className='flex flex-row ml-[200px]'>
          <img src={logo} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>


        <div className='flex justify-center mt-[150px]'>
          <div className='bg-red-200 h-[200px] w-[50%] '>
            <div className="bg-white text-zinc-800">
              <div className="max-w-7xl justify-center content-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-left mb-12 w-[600px]">
                  <div>
                    <h1 className="text-3xl ml-[100px] text-left font-bold">Translation Services</h1>
                  </div>
                  <p className="mt-4 ml-[100px] text-lg left text-zinc-600">Letter Crafts is your partner for over 80 languages.<br>
                  </br> Our team of native translators and industry experts <br>
                    </br> can cater to all your translation needs.</p>
                </div>

                <div>
                  <img className='ml-20 w-[420px] h-[268px]' src={panna} alt="" />
                </div>

              </div>
            </div>


          </div>

          <div className=' h-auto p-4 w-[50%] '>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#FFFFFF] rounded-lg shadow ">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon1} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Certified translation and notarisation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon2} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Business document translation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon3} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Personal document translation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon4} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Website and apps translation and localisation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon5} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Typesetting and copywriting documents</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon6} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Marketing translation and transcreation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon7} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Business specific translation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon8} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Legal document translation</h3>
              </div>
              <div className="p-6 bg-[#FFFFFF] rounded-lg shadow">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon9} alt="" />
                </div>
                <h3 className="text-lg font-semibold text-center">Technical and IT translation</h3>

              </div>
            </div>

          </div>
        </div>

{/* <Section3/> */}

      </div>
     </>
  )
}

export default Component2