"use client"
import React, { useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

//to navigate to different part of the screen from the navbar
const navigation = [ 
    { name: "Home", href: "hero" },
    { name: "Features", href: "features" },
    { name: "Kitchen ?", href: "kitchen" },
    { name: "FAQ", href: "FAQ-Section" },

  ];

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Signin from './_auth/sign-in';
import Signup from './_auth/create-account';

const Header = () => {

    const [isVisible, setIsVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false);
    };
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [signupDialogOpen, setSignupDialogOpen] = useState(false);  

    return (
      <header className="fixed inset-x-0 top-0 z-50 "> 
      {isVisible && (
          <div className="  isolate flex items-center gap-x-6 overflow-hidden bg-green-90 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div
              className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            ></div>
            <div
              className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            ></div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm leading-6 text-white">
                <strong className="font-semibold">wajbah app 👋🏻</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                Download app now - enjoy 10 %.
              </p>
              <a
                href="/"
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Download <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleClose}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
        <nav className="flex items-center justify-between py-3 lg:px-52 md:px-20 px-16
         bg-white  " aria-label="Global"> {/* Adjusted padding here */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="/wajbah-logo.png"
                alt="logo"
                width={110}
                height={60}
              />
            </a>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
              key={item.name}
              to={item.href}
              spy={true}
              smooth={true}
              duration={800}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >
              {item.name}
            </Link>
            ))}
          </div>

          <div className="flex lg:flex-1 lg:justify-end gap-x-2 sm:gap-2">
  <Dialog>
    <DialogTrigger asChild>
      <button
        className="bg-white px-3.5 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 text-gray-900 hover:bg-grey-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Log in
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <Signin />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>

  <div className="lg:hidden h-2"></div> {/* Spacer for small screens */}

  <Dialog>
    <DialogTrigger asChild>
      <button
        className="rounded-xl bg-green-90 px-3 py-2 text-sm font-medium text-white hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign up
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <Signup />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</div>

        </nav>
      </header>
    );
};

export default Header
