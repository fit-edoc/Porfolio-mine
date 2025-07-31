import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import { Github, Linkedin ,ShareIcon,XIcon} from "lucide-react";
import { href } from "react-router-dom";


const icons = [
  {link:<Github/>,hrefs:"https://github.com/fit-edoc"},
  {link:<Linkedin/>,hrefs:"https://www.linkedin.com/in/himanshu-verma-6b4a94329/"},
    {link:<XIcon/>,hrefs:"https://x.com/fitedocc"}
]

const Home = () => {
  return (
    <div className="min-h-screen w-screen relative bg-neutral-900">
      <div className="h-[100%] w-[350px] bg-gradient-to-tr  from-[#000000] to-[#444254] absolute-center  rounded-md md:w-[90vw]">
        <motion.div
          className="min-h-[50%] w-full flex flex-col items-center justify-center  gap-4"
          initial={{
            opacity: 0,
            y: -10,
            backdropFilter: "blur(40px)",
            textShadow: "0px 0px 10px white",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            backdropFilter: "blur(0px)",
            repeatCount: 1,
            textShadow: "0px 0px 2px white",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src="/avatar.png"
            className="rounded-full h-[100px] w-[100px]"
            alt=""
          />
          <h1 className="text-3xl text-white font-logo text-center">Himanshu Verma</h1>
          <h1 className="text-center text-[25px] font-title text-white px-6">
            {" "}
            Welcome to my digital playground! <br />I tinker with{" "}
            <span className="text-[#f29bff] text-[28px]">MERN</span> magic,
            freelance gigs, and occasionally save the web from bad code.
          </h1>{" "}
        </motion.div>

        <motion.div className="h-[50%] w-full"
         initial={{
            opacity: 0,
            y: 10,
            backdropFilter: "blur(40px)",
            textShadow: "0px 0px 50px white",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            backdropFilter: "blur(0px)",
            repeatCount: 1,
            textShadow: "0px 0px 5px white",
          }}
          transition={{ duration: 1, ease: "easeInOut" }} > 
          <div className="min-h-20 w-full  flex items-center justify-center gap-4">
            {icons.map((item,idx)=>(
              <a href={item.hrefs} className="text-white px-2 py-2 bg-black rounded-full hover:bg-white hover:text-black active:scale-110 transition-all duration-150 ease-linear">{item.link}</a>
            ))}
          </div>
          <div className="flex justify-center" > <a href="mailto:himanshuverma2660@gmail.com"  className=" h-[40px] w-[70%] py-2 bg-white text-black rounded-md flex-center hover:bg-black hover:text-white active:scale-110 transition-all ease-in-out duration-500 gap-[10px] font-extrabold  uppercase">Reach ME<img src="/Hire.svg" className="bg-white bg-blend-multiply rounded-full px-1 py-1" alt="" /> </a></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
