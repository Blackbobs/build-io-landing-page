import React from 'react'

const index: React.FC = () => {
  return (
    <footer className='bg-[#333]'>
       <div className='flex items-center justify-between p-3'>
       <div><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
       <div>
        <p className='font-medium capitalize italic text-[14px]'>Developed & designed by Black Bobs</p>
       </div>
       <div>
         <p className='capitalize font-medium'>copyrights &copy; {new Date().getFullYear()}</p>
        </div> 
       </div> 
    </footer>
  )
}

export default index