"use client"
import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero' className="overflow-hidden bg-white pt-52 lg:py-32 md:pt-40  ">
    <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:py-6">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-10 lg:mt-11 ">

         <div className="pb-5 sm:mb-8 sm:flex lg:justify-start justify-center">
          <div className="relative rounded-full text-center  px-3 py-1 text-sm bg-white leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              You can apply as a kitchen to Wajbah.{' '}
              <a href="#" className="font-semibold text-green-50">
              <span className="absolute inset-0" aria-hidden="true" />
              Apply now <span aria-hidden="true">&rarr;</span>
              </a>
          </div>
          </div>


    <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent sm:text-6xl">
        Crafting Success to Homemade food 
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Delivering Homemade Excellence: Egypt's Premier Choice for Fresh and Flavorful homemade food, 
        Right to Your Doorstep.
        </p>

        <div className="mt-10 flex justify-center lg:justify-start items-center gap-x-6">
        <button
            onClick={() => {
                // Add your sign-up logic here
            }}
            className="rounded-md text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        <img src="/App Store.png" alt="app store" className="w-44 h-13" />
    </button>

    <button
        onClick={() => {
            // Add your sign-up logic here
        }}
        className="rounded-md text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        <img src="/Google Play.png" alt="play store" className="w-44 h-13 mr-1" />
    </button>
    </div>
      </div>
        </div>
        <img
          src="/bgggg.png"
          alt="Product screenshot"
          className="w-[48rem] max-w-50 max-h-25 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width={1216}
          height={100}
        />
      </div>
    </div>
  </div>
  )
}

export default HeroSection
