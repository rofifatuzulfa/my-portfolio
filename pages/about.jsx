import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

const About = () => {
  return (
    <div className="bg-[#F4EBF0] h-full w-full">
      <div className="fixed z-50 w-full h-auto">
        <Navbar />
      </div>
      <div className="pt-24 mb-10 text-center text-[#894862] font-bold">
        <h2 className="text-4xl xl:mr-20">Glad to meet you!</h2>
        <div className="lg:flex justify-around lg:px-10 py-5 xl:px-20">
          <div className="flex h-auto justify-center md:justify-self-center lgmax:w-full items-center bg-cover w-6/12 lg:shadow-2xl lg:shadow-[#894862]/50">
            <Image
              src="/foto2.jpg"
              alt="foto2"
              width={350}
              height={450}
              className="object-cover lgmax:hover:scale-125 lgmax:shadow-2xl lgmax:shadow-[#894862]/50"
            />
          </div>
          <div className="text-left w-full smmax:px-5 md:px-10 lg:pl-10 lg:pt-0 pt-5">
            <h1 className="text-2xl">Hello!</h1>
            <p className="text-lg text-[#926893] indent-10 pt-4 text-justify">
              I&apos;m Rofifatuz Zulfa Darwista, shortly, you can call me Zulfa.
              I graduated student of Geodesy and Geomatic Engineering at Bandung
              Institute of Technology in 2021. I&apos;m a fast learner person
              who interested in learning new things and work well with others.
            </p>
            <p className="text-lg text-[#926893] indent-10 pt-3 text-justify">
              I have no experience being web developer in any tech company, but
              I&apos;ve graduated from Alterra Academy&apos;s Frontend Engineering
              program and enthusiast to lead my current career path towards the
              digital technology field, especially in Frontend Developing. I
              also experienced working with others Frontend Engineering students
              and collaborate with Backend Engineering students to build
              functional website.
            </p>
            <p className="text-lg text-[#926893] indent-10 pt-3 text-justify">
              My current language are HTML, CSS, Javascript, React Js, and Next
              Js. I can operate CRUD, context, redux, local storage and cookies
              operations. But don&apos;t worry, I still improve my competence
              and explore more things related to frontend developer.
            </p>
            <h6 className="text-2xl mt-10 smmax:text-center text-left">
              Want to know more &apos;bout me?
            </h6>
            <div className="mt-4 smmax:text-center text-left">
              <button className="rounded-full text-lg text-[#894862] font-semibold border-[1px] border-[#894862] px-10 py-[1px] bg-[#F4EBF0] hover:bg-[#894862] hover:text-[#F4EBF0] active:bg-[#F4EBF0] active:text-[#894862]">
                Get in Touch!
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

export default About;
