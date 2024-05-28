import React from 'react'

const index: React.FC = () => {
  return (
    <section className='w-full md:max-w-screen-lg mx-auto my-10 p-2'>
       <div className='flex flex-col md:flex-row gap-5'>
         <ul className='text-primary flex flex-col gap-5 bg-[#333] p-10 rounded-lg shadow-lg'>
            <li> <span className='font-medium italic'>Enhanced Collaboration:</span> Break  down silos and foster cross-disciplinary collaboration for better projects outcomes</li>
            <li><span className='font-medium italic'>Increased Productivity:</span> Eliminate communication barriers and streamline workflows to boost efficiency</li>
            <li><span className='font-medium italic'>Community Building:</span> Build a vibrant community of tech professionals, fostering knowledge shairng and networking opportunities.</li>
         </ul>
         {/* <div className='w-full p-2'>
            <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="code" />
         </div> */}
        </div> 
    </section>
  )
}

export default index