import React from 'react'
import el1 from '../../Assets/el1.png'
import el2 from '../../Assets/el2.png'
import el3 from '../../Assets/el3.png'
import el4 from '../../Assets/el4.png'


const Section4 = () => {
    return (
        <div className='mt-[100px]'>

            <div class="bg-white p-8 ml-10 ">
                <h2 class="text-3xl font-bold text-center mb-12 w-[20%]">Businesses love working with us</h2>

                
                <div className='w-[40%] grid grid-cols-2 gap-8 '>

                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>

                </div>
            </div>




            <div class="col-span-1 md:col-span-2 lg:col-span-4 mt-[-400px] ml-[800px] ">
                <div class=" gap-6 shadow-lg">
                    <div class="p-4  rounded-lg w-[570px]">
                        <div class="flex items-center space-x-3 mb-4">
                             <img src={el1} alt="" />
                            <div>
                                <h4 class="font-semibold">Floyd Miles</h4>
                                <div class="text-yellow-400">★★★☆☆</div>
                            </div>
                        </div>
                        <p>"Very quick and easy! Great service, thanks!"</p>
                    </div>
                    <div class="p-4  rounded-lg mt-10 w-[570px]">
                        <div class="flex items-center space-x-3 mb-4">
                             <img src={el2} alt="" />
                            <div>
                                <h4 class="font-semibold">Arlene McCoy</h4>
                                <div class="text-yellow-400">★★★☆☆</div>
                            </div>
                        </div>
                        <p>"The Services provided are really great, we received a genuine advice and at very reasonable cost. all the work went hassle-free and no complication. Mr. Gamar i..."</p>
                    </div>
                    <div class="p-4  rounded-lg mt-10 w-[570px]">
                        <div class="flex items-center space-x-3 mb-4">
                             <img src={el3} alt="" />
                            <div>
                                <h4 class="font-semibold">Leslie Alexander</h4>
                                <div class="text-yellow-400">★★★☆☆</div>
                            </div>
                        </div>
                        <p>"Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c..."</p>
                    </div>
                    <div class="p-4  rounded-lg mt-10 w-[570px]">
                        <div class="flex items-center space-x-3 mb-4">
                            <img src={el4} alt="" />
                             <div>
                                <h4 class="font-semibold">Marvin McKinney</h4>
                                <div class="text-yellow-400">★★★☆☆</div>
                            </div>
                        </div>
                        <p>"I ordered a Balmain T-shirt dress from here and it is fabulous. The packaging was extremely professional and nice and sweets were added in the box. Extremely sa..."</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Section4