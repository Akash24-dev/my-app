import React from 'react'
import el1 from '../../Assets/el1.png'
import el2 from '../../Assets/el2.png'
import el3 from '../../Assets/el3.png'
import el4 from '../../Assets/el4.png'
// import frn from '../../Assets/LangPage/frn.png'
import fr from '../../Assets/LangPage/fr.png'


const Lang5 = () => {
    return (
        <div className='h-[1140px] flex font-Gordita position-fixed mt-[100px]' style={{ backgroundImage: `url(${fr})`, backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className='mt-[100px]'>

            <div class=" p-8 ml-10 mt-[100px] ">
                <h2 class="text-4xl font-bold text-center mb-12 w-[300px] text-white ">Businesses love working with us</h2>


                <div className='w-[500px] grid grid-cols-2 gap-8 text-white   '>

                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold text-blue-600">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold text-blue-600">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold text-blue-600">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>
                    <div className=" w-[80%]">
                        <h3 class="text-4xl font-bold text-blue-600">250+</h3>
                        <p className='mt-2'>Posuere lacus dignissim eget a venenatis aenean at interdum.</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="space-y-4 p-4 w-[500px] mt-[190px] ml-[150px]">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3">
                    <img className='rounded-full' src={el1} alt="" />
                    <div>
                        <p className="font-semibold">Floyd Miles</p>
                        <p>⭐⭐⭐☆☆</p>
                    </div>
                </div>
                <p className="mt-2 text-zinc-600">“Very quick and easy! Great service, thanks!”</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3">
                    <img className='raunded-full' src={el2} alt="" />
                    <div>
                        <p className="font-semibold">Arlene McCoy</p>
                        <p>⭐⭐⭐☆☆</p>
                    </div>
                </div>
                <p className="mt-2 text-zinc-600">“The Services provided are really great, we received a genuine advice and at very reasonable cost. all the work went hassle-free and no complication. Mr. Gamar i...”</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3">
                    <img className='raunded-full' src={el3} alt="" />

                    <div>
                        <p className="font-semibold">Leslie Alexander</p>
                        <p>⭐⭐⭐☆☆</p>
                    </div>
                </div>
                <p className="mt-2 text-zinc-600">“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-3">
                    <img className='raunded-full' src={el4} alt="" />

                    <div>
                        <p className="font-semibold">Marvin McKinney</p>
                        <p>⭐⭐⭐☆☆</p>
                    </div>
                </div>
                <p className="mt-2 text-zinc-600">“I ordered a Balmain T-shirt dress from here and it is fabulous. The packaging was extremely professional and nice and sweets were added in the box. Extremely sa...”</p>
            </div>
        </div>

    </div>
    )
}

export default Lang5