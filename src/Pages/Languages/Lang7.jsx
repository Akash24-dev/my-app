import React from 'react'
import pp from '../../Assets/LangPage/pp.png'
import Tag1 from  '../../Assets/LangPage/Tag1.png'
import Tag2 from  '../../Assets/LangPage/Tag2.png'
import Tag3 from  '../../Assets/LangPage/Tag3.png'


const Lang7 = () => {
  return (
    <div className='h-[850px] font-Gordita position-fixed' style={{ backgroundImage: `url(${pp})`, backgroundSize: "cover", backgroundPosition: "center" }}>

 
        <div className=" py-12 px-4">
            <div className="max-w-screen-xl mx-auto mt-[200px]">
                <h2 className="text-3xl font-bold text-center mb-8 text-white mt-[-50px]">Why LetterCrafts?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white text-zinc-800 rounded-lg p-6 shadow-lg">
                        <div className="flex justify-center items-center mb-4">
                            <img src={Tag1} alt="Best Rates Icon" className="p-2  rounded-full"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center">Best Rates</h3>
                        <p>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</p>
                    </div>
                    <div className="bg-white text-zinc-800 rounded-lg p-6 shadow-lg">
                        <div className="flex justify-center items-center mb-4">
                            <img src={Tag2} alt="High Quality Icon" className="p-2 rounded-full"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center">High Quality</h3>
                        <p>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</p>
                    </div>
                    <div className="bg-white text-zinc-800 rounded-lg p-6 shadow-lg">
                        <div className="flex justify-center items-center mb-4">
                            <img src={Tag3} alt="Speed Icon" className="p-2  rounded-full"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center">Speed</h3>
                        <p>You are welcome to provide any feedback or ask for corrections. We assure 6 months post project support to all our clients.</p>
                    </div>
                </div>
            </div>
        </div>
        
  
    </div>
  )
}

export default Lang7