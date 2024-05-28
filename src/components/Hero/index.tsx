import React from "react";

const index: React.FC = () => {
  return (
    <section className="hero_bg w-full h-screen p-2">
      <div className="w-full h-full flex flex-col place-items-center justify-center items-center mx-auto">
        <h1 className="text-2xl capitalize text-center">
          Unite, Collaborate, Create: Your all-in-one tech collaboration
          platform
        </h1>
        <button className="m-3">
          <a href="#!" className='bg-brand py-3 px-5 text-xl rounded-full capitalize text-primary font-medium inline-block'>start building today</a>
        </button>
        {/* <div className="my-3 text-center w-full flex flex-col items-center">
          <small className="m-2 capitalize font-medium text-[14px] inline-block">join our waitlist</small>
          <form className="flex gap-1">
          <input className="bg-primary text-[#1a1a1a] p-2 outline-none rounded focus:border-brand focus:border-2" type="text" placeholder="enter your email..." autoComplete="false" />
          <button className="bg-brand p-2 outline-none rounded md:px-3" type="submit">Join waitlist</button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default index;
