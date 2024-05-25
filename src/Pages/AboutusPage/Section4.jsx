import React from 'react'
import fr5 from '../../Assets/fr5.png'
import f50 from '../../Assets/f50.png'



const Section4 = () => {
  return (
    <div>

<div className='h-[950px] font-Gordita position-fixed mt-[100px]' style={{ backgroundImage: `url(${fr5})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className=" text-white p-10 ml-7 py-[100px] mx-auto ">
                    <h2 className="text-3xl font-semibold mb-4 py-8 text-center">Our Clients</h2>
                    <p className="mb-6 text-center">Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra <br>
                    </br> gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet.</p>
                    <div className="flex flex-wrap gap-4">
                         
                     
                        <div>
                            <div className='flex place-items-center content-center justify-center gap-12 ml-[210px]'>
                            <button className="text-blue-400 font-semibold">Government & NGO</button>
                                                        {/* <h1 className="border-b-2 border-blue-400 w-24"> <h1/> */}

                                <button className="text-zinc-400 hover:text-white">Banking & Finance</button>
                                <button className="text-zinc-400 hover:text-white">Travel & Leisure</button>
                                <button className="text-zinc-400 hover:text-white">Legal</button>
                                <button className="text-zinc-400 hover:text-white">Health</button>
                                <button className="text-zinc-400 hover:text-white">Engineering</button>
                                <button className="text-zinc-400 hover:text-white">Digital & Education</button>
                            </div>
                        </div>
                        <div className='mt-10 ml-[100px]'>
                            <img src={f50} alt="" />
                        </div>
                    </div>
                </div>

            </div>







    </div>
  )
}

export default Section4