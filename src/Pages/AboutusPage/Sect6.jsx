import React from 'react'
import frm from '../../Assets/About/frm.png'
import Frame7 from '../AboutusPage/Sect6'
import rect from '../../Assets/About/rect.png'

const Sect6 = () => {
  return (
    <div className='h-[991px] font-Gordita position-fixed  ' style={{ backgroundImage: `url(${frm})`, backgroundSize: "cover", backgroundPosition: "center" }}>
 
        <body className=" p-8 ">
            <div className="max-w-6xl mx-auto mt-[250px]">
                <h2 className="text-2xl font-semibold text-center text-white ml-[-830px]  mb-10">Certifications & Memberships</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className=" shadow-lg rounded-lg overflow-hidden">
                         
                        <div className="p-4 bg-white">
                             <img src={rect} alt="" />
                            <p className=" text-sm">Licensed by the Globalization and Localization Association (GALA)</p>

                            <p className=" text-xs">William Duckloe, CEO</p>
                        </div>
                    </div>
        
                    <div className=" shadow-lg rounded-lg overflow-hidden">
                        
                        <div className="p-4 bg-white">
                             <img src={rect} alt="" />
                            <p className="text-zinc-800 text-sm">Licensed by the Globalization and Localization Association (GALA)</p>

                            <p className=" text-xs">William Duckloe, CEO</p>
                        </div>
                    </div>
        
                    <div className=" shadow-lg rounded-lg overflow-hidden">
                         
                        <div className="p-4 bg-white">
                              <img src={rect} alt="" />
                              <p className=" text-sm">Licensed by the Globalization and Localization Association (GALA)</p>

                            <p className="text-xs">William Duckloe, CEO</p>
                        </div>
                    </div>
        
                    <div className=" shadow-lg rounded-lg overflow-hidden">
                        
                        <div className="p-4 bg-white">
                             <img src={rect} alt="" />
                             <p className="text-zinc-800 text-sm bg-white">Licensed by the Globalization and Localization Association (GALA)</p>

                            <p className=" text-xs bg-white">William Duckloe, CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
  


    </div>
  )
}

export default Sect6