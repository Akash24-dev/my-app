import React from 'react'
import com from '../../Assets/Industry Page/com.png'
import Comp from '../../Assets/Industry Page/Comp.png'

const Industry3 = () => {
  return (
    <div className='h-[1000px] mt-[50px] font-Gordita position-fixed' style={{ backgroundImage: `url(${Comp})`, backgroundSize: "cover", backgroundPosition: "center" }}>
 
        <div className=" p-6 ">
            <div className="max-w-4xl mx-auto mt-[200px]">
                <div className='ml-[160px]'> 
                <h1 className="text-4xl ml-[300px] font-bold text-zinc-900 dark:text-white mb-6">Lorem ipsum dolor sit amet consectetur</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 ">
                         <img className='ml-[-100px]' src={com} alt="" />
                    </div>
                    <div className="md:w-1/2 text-zinc-700 dark:text-zinc-300">
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae molestie venenatis pulvinar sed ullamcorper nunc non nascetur odio. Aliquam donec sem vitae duis. Est odio massa facilisis nibh proin nibh turpis quis. Aenean. Sed porta porta in auctor facilisi elit sed. Fusce viverra fames at aliquam urna vitae.</p>
                        <p>Et nec tellus ac purus bibendum in. Diam donec ligula amet mauris urna. Ipsum nibh odio cras nec pulvinar. Consectetur vitae. Suspendisse enim arcu sit feugiat tortor sed ornare tellus neque sed at nisi vel mattis. Etiam pharetra facilisis tempus commodo. Vehicula lacus pellentesque id amet in venenatis quis phasellus. Duis sit est ullamcorper ultrices. Purus placerat placerat senectus eu ornismod amet commodo velit. Eu id et mattis nec porta sed nisi sem ultrices. Fames viverra maecenas quis vitae id nisi. Laoreet pereesent sapien ultricies aliquet faucibus augue neque sollicitudin.</p>
                        <p>Mattis et diam sapien nulla at ut condimentum. Fermentum nec faucibus risus mattis nunc hendrerit amet. Ipsum sit mus pellentesque volutpat malesuada eu urna. Etiam hac urna molestie pharetra feugiat euismod sed. Porttitor hendrerit arcu sed ac lobortis.</p>
                    </div>
                </div>
            </div>
        </div>
  
    </div>
  )
}

export default Industry3