import React from 'react'
import Frame62 from '../../Assets/About/Frame62.png'
import flag from '../../Assets/About/flag.png'


const Section2 = () => {
    return (
        <div className=' lg:h-[650px] ' style={{ backgroundImage: `url(${Frame62})`, backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className='grid grid-cols-2'>
                <div className=' h-[600px] w-[600px]'>
                    <div>
                        <img className='mt-[35%] ml-[200px]' src={flag} alt="" />
                    </div>

                </div>
                <div className=' mt-[250px]  text-white ml-[-100px]'>
                    <p className=' font-bold text-4xl'>Our Mission</p>
                    <div className='w-[700px]'> 
                    <p className='mt-[30px]'>
                        We operate with a single-minded focus to deliver high quality, fast and an affordable Translation service.
                    </p>
                    <p className='mt-[20px]'>
                        As a translations company we are conscious of the value proposition we bring to our clients and so we strive to do our best every-time a client engages us.
                        Providing customized solutions and being sensitive to client's requirements are values that are ingrained in our ways of working.
                    </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section2