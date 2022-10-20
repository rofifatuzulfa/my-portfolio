import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const ContactMe = () => {
  return (
    <div className="bg-[#F4EBF0] h-full w-full">
      <div className="fixed w-full h-auto">
        <Navbar />
      </div>
      <div className="py-20 text-[#F4EBF0] font-bold bg-[#926893]">
        <h1 className="text-2xl text-center pt-10 px-20">
          Thanks for taking the time to reach out. How can I help you today?
        </h1>
        <div className="flex justify-center mt-10">
          <div className="text-[#894862] lg:w-8/12 smmax:w-10/12 px-10 py-10 bg-[#F4EBF0] rounded-3xl smmax:text-center">
            <div className="sm:flex justify-between gap-10">
              <div className="w-6/12 form-group smmax:w-full">
                <p className="text-xl">Name</p>
                <input
                  placeholder="Your name ..."
                  type="text"
                  className="form-control bg-[#F4EBF0] border-[1px] border-[#894862] rounded-2xl h-10 mt-3 w-full px-3"
                />
              </div>
              <div className="w-6/12 form-group smmax:w-full smmax:mt-5">
                <p className="text-xl">Email</p>
                <input
                  placeholder="Your email ..."
                  type="email"
                  className="form-control bg-[#F4EBF0] border-[1px] border-[#894862] rounded-2xl h-10 mt-3 w-full px-3"
                />
              </div>
            </div>
            <div className="mt-5 form-group">
              <p className="text-xl">Message</p>
              <textarea
                placeholder="Your message"
                type="textarea"
                className="form-control bg-[#F4EBF0] border-[1px] border-[#894862] rounded-2xl mt-3 w-full px-3 py-3"
                id="exampleFormControlTextarea13"
                rows="6"
              />
            </div>
            <div className="pt-5 flex justify-end">
              <button className="rounded-full text-[#894862] font-semibold border-[1px] border-[#894862] px-8 py-[1px] bg-[#F4EBF0] hover:bg-[#894862] hover:text-[#F4EBF0] active:bg-[#F4EBF0] active:text-[#894862]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactMe;
