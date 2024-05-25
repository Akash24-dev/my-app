import React from 'react'
import rect2 from '../../Assets/About/rect2.png'

const Sect7 = () => {
  return (
    <div>
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-center text-3xl font-extrabold text-zinc-900 dark:text-white">Technology</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className=" p-6 rounded-lg shadow-md">
                         <img src={rect2} alt="" />
                         <h1 className='text-4xl font-bold w-[380px]'>Translation management system (TMS)</h1>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Translation management system (TMS)</h3>
                    <p className=" mt-2">To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
                </div>
                
                <div className=" p-6 rounded-lg shadow-md">
                         <img src={rect2} alt="" />
                         <h1 className='text-4xl font-bold w-[380px]'>Translation management system (TMS)</h1>

                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Translation management system (TMS)</h3>
                    <p className=" mt-2">To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
                </div>
                
                <div className="text p-6 rounded-lg shadow-md">
                         <img src={rect2} alt="" />
                         <h1 className='text-4xl font-bold w-[380px]'>Translation management system (TMS)</h1>

                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Translation management system (TMS)</h3>
                    <p className=" mt-2">To record all project details systematically and assign jobs to in-house linguists or freelancers automatically.</p>
                </div>
            </div>
        </div>
  
    </div>
  )
}

export default Sect7