import React from 'react'
import Qu from '../../Assets/LangPage/Qu.png'

const Lang4 = () => {
  return (
    <div className='mt-[100px]'>
 
        <div className="flex flex-col md:flex-row items-center p-8">
            <div className="md:w-1/2">
                 <img src={Qu} alt="" />
            </div>
            <div className="md:w-1/2 text-left space-y-4">
                <h2 className="text-3xl font-bold">Why LetterCrafts?</h2>
                <p className="text-lg">We provide quick, affordable and high-quality Certified Translations & Notarisation Services.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Our translated documents are accepted in all the government bodies in Singapore:</strong>
                        <ul className="list-disc pl-5">
                            <li>ICA, MOM, LTA, ROM.</li>
                            <li>Visa, Immigration & Embassy submissions</li>
                            <li>PR applications</li>
                            <li>Notarization service is available on request</li>
                        </ul>
                    </li>
                    <li>We value your business and understand the importance of accurate translations.</li>
                    <li>To ensure professional-grade translations, we only engage industry experts and native translators. We help our clients with:
                        <ul className="list-disc pl-5">
                            <li>Business and Ecommerce documentation translations</li>
                            <li>Personal document translations</li>
                            <li>Banking, Legal and Contracts translations</li>
                            <li>Websites, Apps and Product Description translations</li>
                            <li>Technical, IT and Medical translations</li>
                            <li>Advertising and Marketing translations</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
  
    </div>
  )
}

export default Lang4