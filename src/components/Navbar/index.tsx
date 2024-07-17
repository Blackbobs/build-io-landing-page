import React from 'react'

const index: React.FC = () => {
  return (
    <nav className='flex items-center justify-between container mx-auto bg-[#1a1a1a] p-4 rounded-full my-2'>
      <div><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
      <div>
        <button>
          <a href="https://build-io-one.vercel.app/signup" className='bg-brand p-3 rounded-full capitalize text-primary font-medium'>start building</a>
        </button>
      </div>
    </nav>
  )
}

export default index