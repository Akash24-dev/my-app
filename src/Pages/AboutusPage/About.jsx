import React from 'react'
import Ab1 from '../../Assets/About/Ab1.png'
import Frame from '../../Assets/About/Frame.png'
import Abt1 from '../../Assets/About/Abt1.png'
import rec from '../../Assets/About/rec.png'
import Section2 from '../AboutusPage/Section2'
import Section3 from '../../Pages/AboutusPage/Section3'
import Section4  from '../../Pages/AboutusPage/Section4'
import Sect5 from '../../Pages/AboutusPage/Sect5'
import Sect6 from '../../Pages/AboutusPage/Sect6'
import Sect7 from  '../../Pages/AboutusPage/Sect7'




const About = () => {
    return (
        <>
            <div className='z-1'>
                <div className=' lg:h-[705px]  grid grid-cols-2 ' style={{ backgroundImage: `url(${Ab1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='md:flex'>
                        <div className='text-white lg:h-[300px] md:w-[80%] lg:w-[110%] ml-[100px] mt-[23%]'>
                            <div className='w-[80%] lg:w-[70%]'>
                                <h1 className=' lg:text-[48px] font-bold'>About us</h1>
                                <p className='text-[12px] md:text-[14px] lg:text-[16px] '>In mi nunc auctor eget a donec placerat. Enim turpis turpis sed eu eu. Neque duis orci nam in mauris a sed. Ac id leo posuere et mattis in cras dapibus. Tortor sapien amet cursus at consequat faucibus laoreet eu at. Eu ac mattis risus augue. Ultricies adipiscing euismod id egestas lacus platea senectus mattis mattis. Erat sit amet non porttitor id elementum. Et vel placerat eros risus molestie hac diam sed. Lectus fusce volutpat consequat augue. Tortor cras urna risus accumsan cursus. Molestie libero ut sapien ultrices amet nunc fusce.</p>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:h-[692px] z-2 ' style={{ backgroundImage: `url(${Frame})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <img className='mt-[30%] ml-[5%]' src={Abt1} alt="" />
                    </div>

                </div>
                <div className='ml-[10%] mt-14'>
                    <h1 className='text-2xl font-bold '> The Team</h1>
                    <div className='w-[700px]'>
                        <p className='mt-[5%] w-[500px]'>
                            We are a passionate team of professional Translators. With years of experience in translating over 80 language pairs and handling complex projects - We can cater to all your Translation needs.
                        </p>
                        <p className='mt-[5%] w-[500px]'>
                            Our People: the diversity and rich experience they bring in is our biggest asset that has enabled us to move from strength to strength.
                            Founded in Singapore, we are now expanding our footprint into Hong Kong, Japan, India, UAE, and the UK
                        </p>
                    </div>
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className=" rounded-lg shadow-lg p-5 text-black">
                            <img src={rec} alt="" />
                            <h3 className="text-lg font-semibold mt-[5%] text-center">Brooklyn Simmons</h3>
                            <p className="text-sm w-[210px] text-center">Dapibus eget mi et eu tortor ipsum. Voluptat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                        <div className=" rounded-lg shadow-lg p-5 text-black">
                            <img src={rec} alt="" />
                            <h3 className="text-lg font-semibold mt-[5%] text-center">Brooklyn Simmons</h3>
                            <p className="text-sm w-[210px] text-center">Dapibus eget mi et eu tortor ipsum. Voluptat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                        <div className=" rounded-lg shadow-lg p-5 text-black">
                            <img src={rec} alt="" />
                            <h3 className="text-lg font-semibold mt-[5%] text-center">Brooklyn Simmons</h3>
                            <p className="text-sm w-[210px] text-center">Dapibus eget mi et eu tortor ipsum. Voluptat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                        <div className=" rounded-lg shadow-lg p-5 text-black">
                            <img src={rec} alt="" />
                            <h3 className="text-lg font-semibold mt-[5%] text-center">Brooklyn Simmons</h3>
                            <p className="text-sm w-[210px] text-center">Dapibus eget mi et eu tortor ipsum. Voluptat nec fusce mattis consectetur velit sit nunc urna. Id massa.</p>
                        </div>
                    </div>
                </div>



                <Section2 />
                <Section3 />
                <Section4/>
                <Sect5/>
                <Sect6/>
                <Sect7/>
            </div >
        </>
    )
}

export default About