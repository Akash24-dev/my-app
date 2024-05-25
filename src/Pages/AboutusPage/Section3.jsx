import React from 'react'
import pn from '../../Assets/About/pn.png'

const Section3 = () => {
    return (
        <div className='grid grid-cols-2 mt-[10%]'>
            <div className=' h-[400px] w-[600px] ml-[20%]'>
                <h1 className='text-4xl'>Our Process</h1>
                <p className='mt-[20px]'>We continuously refine our processes to adapt to the latest technology and best project management practices.</p>
                <p className='mt-[20px] w-[700px]'>Projects are assigned only to Translators with the relevant language proficiency, industry background and qualifications. All large projects undergo a peer-peer review and QA checks to ensure consistency in tone and writing style.
                    Initial assessment, drafting of the Translation, QA check, Customer Service and Client Feedback - Every stage of the translation project is logged and reviewed for continuous improvement.</p>

            </div>
            <div className=' h-[400px] w-[600px] ml-[20%]'>
                <img   src={pn} alt="" />

            </div>
        </div>
    )
}

export default Section3