import React from 'react'
import fr68 from '../../Assets/fr68.png'
import user from '../../Assets/user.png'
import phone from '../../Assets/phone.png'
import scro from '../../Assets/scro.png'
import fi from '../../Assets/fi.png'
import deli from '../../Assets/deli.png'
import lang from '../../Assets/lang.png'
import email from '../../Assets/email.png'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'

const Section7 = () => {
    return (
        <div className='h-[1000px] font-Gordita position-fixed mt-[100px]' style={{ backgroundImage: `url(${fr68})`, backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className='grid grid-cols-2'>
                <div className="flex flex-wrap justify-between p-8  ">

                    <div className="w-full lg:w-1/2 p-4 mt-[100px]">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Get in touch</h2>
                        <p className="text-zinc-600 dark:text-zinc-300 mt-2 mb-4 w-[390px]">Lacus eu ultrices sagittis habitant. Etiam gravida lacus leo vel. Nec viverra commodo at convallis faucibus amet. Aliquam a id aliquam pulvinar neque.</p>
                        <form className="space-y-4  mt-[40px]">
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={user} alt="" />
                                </div>
                                <input type="text" placeholder="Name" className=" pl-10 w-[472px] p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={email} alt="" />
                                </div>
                                <input type="email" placeholder="E-mail" className="w-[472px] pl-10 p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={phone} alt="" />
                                </div>
                                <input type="tel" placeholder="Phone" className="w-[472px] pl-10 p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={scro} alt="" />
                                </div>
                                <input type="text" placeholder="Source Language" className="w-[472px] pl-10 p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={lang} alt="" />
                                </div>
                                <input type="text" placeholder="To Language" className="w-[472px] pl-10 p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={deli} alt="" />
                                </div>
                                <input type="text" placeholder="Delivery Options" className="w-[472px] pl-10 p-2 border border-zinc-300 dark:border-zinc-600 rounded" />
                            </div>
                            <div className='relative'>
                                <div className='absolute mt-[10px] mx-[5px]'>
                                    <img className='w-[25px]' src={fi} alt="" />
                                </div>
                                <textarea placeholder="Your Message" className="w-[472px] p-2 pl-10 border border-zinc-300 dark:border-zinc-600 rounded"></textarea>
                            </div>
                            <button type="submit" className="w-[152px] bg-blue-500 text-white p-2 rounded-full">Send Message</button>
                        </form>
                    </div>
                </div>



                
                <div className=' h-[500px] w-[650px] mt-[200px] '>

                    <div className=" text-white p-8  ">
                        <h2 className="text-3xl font-bold mb-6">Tortor in ut nisi magna</h2>
                        <p className="mb-8 w-[500px]">Eget dui varius semper vel viverra. Rhoncus felis tristique nisl eget ultricies semper vitae. Turpis porta maecenas quis felis tempus sed nisl risus sit. Nam viverra lobortis arcu justo netus quis fringilla sed lacus.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 mt-[50px]">

                            <div className="items-center ">
                                <img src={icon1} alt="" />
                                <h3 className="font-semibold">Certified translation and notarisation</h3>

                            </div>
                            <div className=" items-center">
                                <img src={icon2} alt="" />

                                <h3 className="font-semibold">Business document translation</h3>

                            </div>
                            <div className=" items-center">
                                <img src={icon3} alt="" />
                                <div>
                                    <h3 className="font-semibold">Personal document translation</h3>
                                </div>
                            </div>

                            <div className=" items-center">
                                <img src={icon1} alt="" />
                                <div>
                                    <h3 className="font-semibold">Certified translation and notarisation</h3>
                                </div>
                            </div>
                            <div className=" items-center">
                                <img src={icon2} alt="" />
                                <div>
                                    <h3 className="font-semibold">Business document translation</h3>
                                </div>
                            </div>
                            <div className=" items-center">
                                <img src={icon3} alt="" />
                                <div>
                                    <h3 className="font-semibold">Personal document translation</h3>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default Section7