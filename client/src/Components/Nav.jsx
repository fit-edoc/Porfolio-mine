import React from "react";
import { Link, useLocation } from "react-router-dom";
import {motion} from 'motion/react'
import {Home ,FolderRoot,BookOpenCheck} from 'lucide-react'
const Nav = () => {
  const { pathname } = useLocation();

  const home = pathname == "/"
  const about = pathname  == '/about'
  const project = pathname == '/project'

 

  return (
    <div className="w-screen h-[60px] bottom-5  fixed flex items-center justify-center z-40 px-3">
      <div className="w-[400px] h-full    bg-gradient-to-tr from-neutral-950 to-neutral-700 border border-neutral-800 shadow-massive  rounded-lg flex  items-center justify-center gap-6">
          <Link to="/" className="relative px-2 py-2 rounded-md text-xl overflow-hidden bg-neutral-600">
      {/* Static icon/text */}
      <Home className={`  relative z-10 ${home ?"text-black" :"text-white"}`} /> {/* z-10 ensures icon stays above animation */}
      
      {/* Water-fill background (only shows when active) */}
      {home && (
        <motion.div
          initial={{ height: 0 ,backdropFilter:"blur(5px)" }}
          animate={{ height: "100%" ,backgroundColor:"#b190b6", rotate:"360deg" }}
          transition={{ duration: 0.3, ease: "easeOut" ,backdropFilter:"blur(0px)"  }}
          className="absolute inset-0  z-0"
          style={{ originY: 1 }} // Expands from bottom
        />
      )}
    </Link>
        <Link to={"/project"} className=" relative px-2 py-2 rounded-md text-2xl overflow-hidden bg-gray-500 ">
        <FolderRoot className={`relative z-10 ${project ? "text-black" :"text-white"}`}/>
         {project && (
        <motion.div
          initial={{ height: 0 ,backdropFilter:"blur(5px)" , }}
          animate={{ height: "100%",backgroundColor:"#b190b6", rotate:"360deg" }}
          transition={{ duration: 0.3, ease: "easeOut" ,backdropFilter:"blur(0px)" ,mass:300 }}
          className="absolute inset-0  z-0"
          style={{ originY: 1 }} // Expands from bottom
        />
      )}
        
        </Link>


     <Link to={"/about"} className="group relative px-2 py-2 rounded-md text-xl overflow-hidden bg-gray-500">
        <BookOpenCheck className={` relative z-10 group-hover:scale-105${about ? "text-black " :" text-white"}`}/>
         {about && (
        <motion.div
          initial={{ height: 0 ,backdropFilter:"blur(45px)" ,color:"white" }}
          animate={{ height: "100%" ,backgroundColor:"#b190b6", rotate:"360deg"}}
          transition={{ duration: 0.3, ease: "easeOut" ,backdropFilter:"blur(0px)" ,mass:300 }}
          className="absolute inset-0  text-black z-0"
          style={{ originY: 1 }} // Expands from bottom
        />
      )}
        
        </Link>

      </div>
    </div>
  );
};

export default Nav;
