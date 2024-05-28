import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { VscDebugConsole, VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";

// interface = {
//     title: string,
//     text: string,
// }

const features = [
    {
        title: "unified workspace",
        text: "Bring your team together in one centralized hub for effortless collaboration.",
        icon: <BsPersonWorkspace size={50}/>
    },
    {
        title: "versatile tools",
        text: "Access a suite of tools tailored to the needs of designers, developers, project managers, and more.",
        icon: <VscDebugConsole size={50}/>
    },
    {
        title: "real-time communication",
        text: "Stay connected with team members through instant messaging, video calls, and collaboration channels.",
        icon: <HiOutlineChatAlt2 size={50}/>
    },
    {
        title: "project management",
        text: "Streamline project workflows with integrated task management and project tracking.",
        icon: <GoProjectSymlink size={50}/>
    },
    {
        title: "secure and scalable",
        text: "Rest assured knowing  your data is protected with robust security measures, while our platform scales with your team's needs.",
        icon: <VscWorkspaceTrusted size={50}/>
    },
]

const index: React.FC = () => {
  return (
    <section className='p-5'>
        <div className='flex flex-col gap-5 items-center md:flex-row'>
          {features.map((feature, i) => (
            <div key={i} className='bg-[#333] w-full h-[250px] md:w-[300px] rounded-lg p-2 shadow-lg'>
                <div>
                    <div className='flex items-center justify-center'>
                        <i className='text-brand'>{feature.icon}</i>
                    </div>
                    <h2 className='text-center text-brand capitalize text-[18px] m-2 font-medium'>{feature.title}</h2>
                    <p className='text-center mt-5 text-[14px]'>{feature.text}</p>
                </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default index