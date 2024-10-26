
import React from "react";
import LeftSidebarPart from "../LeftSidebarPart";
import rightBgimg from "/public/images/backgrounds/leaf-right.png"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Side Login Authentication",
  description: "Generated by create next app",
};
import Link from "next/link";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";
import Image from "next/image";
import AuthTwoSteps from "../../authforms/AuthTwoSteps";
const twoSteps = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen after:absolute 2xl:after:bg-contain after:bg-cover after:top-0 after:start-0 after:bg-no-repeat after:w-full after:h-full after:bg-[url('/images/backgrounds/login-bg.png')]">
        <div className="grid grid-cols-12 gap-3 h-screen dark:bg-darkgray relative z-[999] bg-transparent">
          <div className="xl:col-span-8 lg:col-span-8 col-span-12 md:block hidden relative overflow-hidden">
            <LeftSidebarPart />        
          </div>
          <div className="xl:col-span-4 lg:col-span-4 col-span-12 sm:px-12 px-4 relative z-10 lg:bg-white bg-transparent">
            <div className="flex h-screen items-center px-3 justify-center">
               <div className="max-w-[460px] w-full bg-white rounded-md  p-4 md:mt-0 mt-20">
                 <h3 className="text-2xl font-bold my-3">
                 Two Step Verification
                 </h3>
                 <p className="text-darklink text-sm font-medium">
                 Please enter the email address associated with your account and We will email you a link to reset your password.
                 </p>
                 <h6 className="text-sm font-bold my-4">******1234</h6>
                 <AuthTwoSteps />
               </div>
             </div>
            <div className="md:block hidden absolute end-0 bottom-0 z-1">
            <Image src={rightBgimg} alt="img"/>
             </div>
             <div className="fixed top-0 start-0 ps-4" ><FullLogo/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default twoSteps;



