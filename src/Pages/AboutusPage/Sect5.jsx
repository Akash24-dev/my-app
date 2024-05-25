import React from 'react'
import study from '../../Assets/study.png'
import dot from '../../Assets/dot.png'


const Section5 = () => {
    return (
        <div>

            <div className='ml-[100px]'>
                <h1 className='font-medium  text-[36px] py-4'>Case Studies</h1>
                <p className='text-[#697587]'>Laoreet in volutpat elementum nisl at eget. Eu egestas scelerisque interdum id imperdiet viverra <br>
                </br> gravida sit scelerisque. Id consequat lorem praesent mauris. Dolor aenean eleifend etiam amet. </p>
            </div>


            <div className='grid grid-cols-2'>

                <div className=' h-[500px] ml-[100px] mt-[70px]'>
                    <h1 className='font-medium  text-[24px] py-4'>Title</h1>
                    <p className='text-[#697587]'> Quis suscipit facilisis consectetur netus egestas. Orci <br>
                    </br> semper rhoncus tortor suspendisse. Lacinia tincidunt <br>
                        </br> elementum elit ut risus enim aliquam tincidunt. <br>
                        </br> Condimentum sit risus sit non sit. Volutpat vitae nibh iaculis <br>
                        </br> aliquam.</p>
                    <div className=''>
                        <h1 className='font-medium  text-[24px] py-4 mt-[50px]'> Project highlights</h1>
                        <li>Quis integer non morbi eget non. </li>
                        <li>At porta vestibulum consequat libero duis id justo. </li>
                        <li>In urna at pulvinar adipiscing egestas neque. </li>
                        <li>Et arcu sed sapien ligula ultricies nisl tincidunt commodo. </li>
                        <li>  Consectetur nam mattis mollis proin.</li>

                    </div>
                    <button className=' mt-10 bg-blue-500 hover:bg-blue-700 text-white rounded-full   py-2 px-4  font-light'> Download CaseStudy</button>


                </div>

                <div className='mt-[100px] h-[500px] '>
                    <img className='h-[430px] w-[430px]' src={study} alt="" />
                </div>
                <div className='ml-[650px] '>
                    <img src={dot} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Section5