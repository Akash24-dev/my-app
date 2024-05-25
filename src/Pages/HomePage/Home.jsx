import React from 'react'
import vector from '../../Assets/Vector.png'
import Frame from '../../Assets/Frame.png'
import Section2 from '../../Pages/HomePage/Section2'
import Section3 from '../../Pages/HomePage/Section3'
import Section4 from '../../Pages/HomePage/Section4'
import Section5 from '../../Pages/HomePage/Section5'
import Section6 from '../../Pages/HomePage/Section6'
import Section7 from '../../Pages/HomePage/Section7'




// import section2 from '../../pages/HomePage/Section2'



const Home = () => {
  return (
    <>
      <div className='overflow-hidden '>

        <div className='h-[680px] font-Gordita position-fixed' style={{ backgroundImage: `url(${vector})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='h-[600px] w-[600px] ml-[900px]' style={{ backgroundImage: `url(${Frame})`, backgroundSize: "cover", backgroundPosition: "center" }}>

          </div>

          <div className=" text-black mt-[-600px] ml-[200px] overflow-x-hidden">
            <div className="container mx-auto px-4">
              <header className="py-5 flex justify-between items-center">
              </header>
              <div className="text-center py-20 text-white ml-[-950px] mt-[100px] scroll ">
                <h1 className="text-5xl font-bold mb-4 ">LetterCrafts</h1>
                <h1 className="text-5xl font-bold mb-4 m|-[-220px] ml-[-228px]"> T|</h1>
                <p className="text-xl mb-6">Professional translators delivering High Quality, Fast & <br>
                </br> Affordable translation services in  Singapore.</p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">Learn More →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[950px] ml-[476px] mt-[-200px]">
                <div className="p-6 bg-[#F3FFD9] rounded-lg shadow-lg">
                  <h2 className="text-2xl mb-2">Certified translation and notarisation</h2>
                  <p className="mb-4">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                  <button className=" text-[#3D65FF] font-bold py-2 px-4 rounded">Learn More →</button>
                </div>
                <div className="p-6 bg-[#FFE2D9] rounded-lg shadow-lg">
                  <h2 className="text-2xl mb-2">Certified translation and notarisation</h2>
                  <p className="mb-4">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                  <button className=" text-[#3D65FF] font-bold py-2 px-4 rounded">Learn More →</button>
                </div>
                <div className="p-6 bg-[#D9F4FF] rounded-lg shadow-lg overflow-hidden scroll-snap-stop: normal">
                  <h2 className="text-2xl mb-2">Certified translation and notarisation</h2>
                  <p className="mb-4">Neque nibh tincidunt amet lectus feugiat nisl varius massa</p>
                  <button className=" text-[#3D65FF] font-bold py-2 px-4 rounded">Learn More →</button>
                </div>
              </div>
            </div>
          </div>
          <div>



          </div>
        </div>

        {/* .................Secand Page................... */}


        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        
      </div>
    </>
  )
}

export default Home