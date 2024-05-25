import React from 'react'

// import log from '../../Assets/log.png'
import log from '../Assets/log.png'
import fm from '../Assets/fm.png'
import school from '../Assets/school.png'




const Footer = () => {
  return (
    <div>

 
        <div className=" text-white bg-black font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div>
                        <div>
                            <img src={log} alt="" />
                        </div>
                        <h2 className="text-lg font-semibold">LETTER LEAFERS</h2>
                        <p className="mt-4">Elementum cras euismod sem in enim vel nunc nulla. At scelerisque tristique purus.</p>
                        <img className='mt-[20px]' src={fm} alt="" />
                        <div className="mt-8">
                             <img src={school} alt="" />
                        </div>
                    </div>
        
                    
                    <div>
                        <h3 className="text-lg font-semibold">Nam felis a</h3>
                        <p className="mt-4">Enim maecenas facilisi amet amet dui. Namque massa urna vitae nullam fermentum. Posuere dis.</p>
                        <h3 className="text-lg font-semibold mt-8">Sit ut vitae</h3>
                        <p className="mt-4">Lectus sapien sem massa libero bibendum. Purus placerat arcu diam ultrices. Non aliquet quam arcu proin.</p>
                    </div>
        
                    
                    <div>
                        <h3 className="text-lg font-semibold">Volutpat</h3>
                        <p className="mt-4">Ultricies consequat tellus luctus vel morbi mattis vulputate. Eleifend dui enim.</p>
                        <h3 className="text-lg font-semibold mt-8">In libero enim</h3>
                        <p className="mt-4">In cursus tellus non etiam volutpat massa varius libero justo. Eu ultrices donec leo diam.</p>
                    </div>
        
                    
                    <div>
                        <h3 className="text-lg font-semibold">Adipiscing</h3>
                        <p className="mt-4">Amet diam aliquet eget posuere tincidunt. Sed nunc feugiat pelentesque. Non tincidunt integer auctor feugiat in egestas in.</p>
                        <h3 className="text-lg font-semibold mt-8">Congue auctor</h3>
                        <p className="mt-4">Nunc convallis consectetur nulla sollicitudin elementum sagittis gravida quisque. Aliquam eu tristique id sed placerat vel rhoncus.</p>
                    </div>
                </div>
            </div>
        </div>
        
  
    </div>
  )
}

export default Footer