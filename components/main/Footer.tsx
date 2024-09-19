// import React from "react";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
//   RxInstagramLogo,
//   RxTwitterLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";

// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
//         <div className="w-full flex flex-col items-center justify-center m-auto">
//             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Community</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <FaYoutube />
//                         <span className="text-[15px] ml-[6px]">Youtube</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <span className="text-[15px] ml-[6px]">Github</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxDiscordLogo />
//                         <span className="text-[15px] ml-[6px]">Discord</span>    
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">Social Media</div>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <FaYoutube />
//                         <span className="text-[15px] ml-[6px]">Instagram</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxGithubLogo />
//                         <span className="text-[15px] ml-[6px]">Twitter</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                         <RxDiscordLogo />
//                         <span className="text-[15px] ml-[6px]">Linkedin</span>    
//                     </p>
//                 </div>
//                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                     <div className="font-bold text-[16px]">About</div>
//                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
//                         <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
//                         <span className="text-[15px] ml-[6px]">Learning about me</span>    
//                     </p>
//                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
//                         <span className="text-[15px] ml-[6px]">ghadionkar2002@gmail.com</span>    
//                     </p>
//                 </div>
//             </div>

//             <div className="mb-[20px] text-[15px] text-center">
//                 &copy; Onkar Ghadigaonkar 2024 Inc. All rights reserved
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://www.youtube.com/@mayurs6787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://github.com/Onkarg2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/onkarg2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">ghadionkar2002@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Onkar Ghadigaonkar 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

