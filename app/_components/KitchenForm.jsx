import React from 'react'

const KitchenForm = () => {
  return (
    <div id='kitchen' class="max-w-[85rem] mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div class="lg:col-span-3">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl ">Kitchen with wajbah ?</h1>
          <p class="mt-3 text-lg text-gray-800 ">Enter your email and we'll reach you out.</p>
    
          <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div class="w-full sm:w-auto">
              <label for="hero-input" class="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Enter work email"
              
              />
            </div>
            <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Request demo
            </a>
          </div>
    

        </div>
    
        <div class="lg:col-span-4 mt-10 lg:mt-0">
          <img class="w-full rounded-xl" src="https://images.pexels.com/photos/4252150/pexels-photo-4252150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Description"/>
        </div>
      </div>
    </div>
  )
}

export default KitchenForm
