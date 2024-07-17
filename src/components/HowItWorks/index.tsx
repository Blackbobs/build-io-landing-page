import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const index: React.FC = () => {
  return (
    <section className="my-5">
      <div className="w-full md:max-w-screen-lg mx-auto p-5 m-2 text-[#f4f4f4]">
        <ul className="flex flex-col space-y-5">
          <li className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg flex items-center gap-3 text-[15px]">
            {" "}
            <i>
              <FaRegCircleCheck className="text-brand" size={25} />
            </i>{" "}
            Sign Up: Create your account and customize your profile.
          </li>
          <li className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg flex items-center gap-3 text-[15px]">
            {" "}
            <i>
              <FaRegCircleCheck className="text-brand" size={25} />
            </i>{" "}
            Create and join teams: Form teams based on projects or areas of
            interest, or join existing teams
          </li>
          <li className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg flex items-center gap-3 text-[15px]">
            {" "}
            <i>
              <FaRegCircleCheck className="text-brand" size={25} />
            </i>{" "}
            Collaborate: Engage in real-time discussions, share files, and
            coordinate task within your team's workspace
          </li>
          <li className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg flex items-center gap-3 text-[15px]">
            {" "}
            <i>
              <FaRegCircleCheck className="text-brand" size={25} />
            </i>{" "}
            Stay Organized: Keep track of project progress, deadlines and
            milestones using built-in project mangement tools.
          </li>
          <li className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg flex items-center gap-3 text-[15px]">
            {" "}
            <i>
              <FaRegCircleCheck className="text-brand" size={25} />
            </i>{" "}
            Connect: Network with professionals across different disciplines,
            exchange insights, and foster creativity.
          </li>
        </ul>
      </div>

      <div>
        <div className="flex flex-col items-center gap-2 my-5">
          <p className="text-[18px]">Techies Collaboration platform</p>
          <button className="">
            <a
              href="https://build-io-one.vercel.app/signup"
              target="_blank"
              className="bg-brand py-3 px-5 text-[14px] rounded-full capitalize text-primary font-medium inline-block"
            >
              start collaborating today
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;
