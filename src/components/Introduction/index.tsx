import React from 'react'
// import rocket from '../../assets/rocket.png'

const index: React.FC = () => {
  return (
    <section className='w-full h-full p-2 my-5'>
        <div className='flex flex-col gap-5 items-center'>
            {/* <img src={rocket} alt="rocket icon" className='w-[80px] h-[80px] object-cover' /> */}
            <p className='text-primary text-center w-full text-[15px] md:w-[960px]'>Welcome to <span className='logo_gradient font-medium text-[15px]'>build.io</span>, where tech professionals unite to bring ideas to life. Whether you're a designer, developer ,project manager, or any other tech enthusiast, our platform provides the perfect environment for seamless collaboration and communication.</p>
        </div>
    </section>
  )
}

export default index