import logo from "@/assets/images/Logo2.png";
import { CgFacebook } from "react-icons/cg";
import { BsDribbble, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 shadow-md w-full p-6 md:p-9">
      <div className="grid lg:grid-cols-3 auto-rows-auto justify-between gap-[30px] flex-wrap w-full">
        <div className="">
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            <Image src={logo} alt="logo" width={152} height={36} />
          </h3>

          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200 text-wrap">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-[30px] md:justify-around justify-between">

          <div>
            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
              About
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Companies
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Pricing
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Terms
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Advice
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Privacy Policy
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
              Resources
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Help Docs
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Guide
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Updates
              </p>
              <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Contact us
              </p>
            </div>
          </div>

        </div>

        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            Get job notifications
          </h3>
          <div className="flex gap-10 flex-col text-[#424242] relative">
            <label className="text-[0.9rem] dark:text-slate-400">
              The latest job news, articles, sent to your inbox weekly.
            </label>

            <div className="flex gap-2 md:flex-row flex-col">
              <input
                type="email"
                className="py-3 px-4 dark:bg-slate-900 dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-[#abc2d3] w-full pr-[90px]  border border-primary outline-none"
                placeholder="Email address"
              />

              <Button
                variant={1}
                className="px-4  hover:bg-[#3B9DF8] hover:text-white "
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-slate-700 pt-[20px] mt-[40px] flex items-center justify-center md:justify-between w-full flex-wrap gap-[20px]">
        <p className="text-[0.9rem] text-gray-600 dark:text-slate-500">
          2021 @ QuickHire. All rights reserved.
        </p>

        <div className="flex items-center gap-[10px] text-[#424242]">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-slate-500 hover:text-white hover:bg-[#3B9DF8] dark:text-[#fff] transition-all duration-300">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-slate-500 hover:text-white hover:bg-[#3B9DF8] dark:text-[#fff] transition-all duration-300">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-slate-500 hover:text-white hover:bg-[#3B9DF8] dark:text-[#fff] transition-all duration-300">
            <BsDribbble />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-slate-500 hover:text-white hover:bg-[#3B9DF8] dark:text-[#fff] transition-all duration-300">
            <BsLinkedin />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-slate-500 hover:text-white hover:bg-[#3B9DF8] dark:text-[#fff] transition-all duration-300">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
