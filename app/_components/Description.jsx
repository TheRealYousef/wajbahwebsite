import React from 'react'

const Description = () => {
  return (
<div className="max-w-[85rem] px-4 py-11 sm:px-6 lg:px-8 lg:py-20 mx-auto">
  <div className="grid md:grid-cols-2 gap-12">
    <div className="lg:w-3/4">
      <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl ">
      Welcome to Wajbah - Your Ultimate Homemade Food Experience!
      </h2>
      <p className="mt-3 text-gray-800 ">
      ultimate destination for homemade culinary delights! With Wajbah, experience the authentic taste of homemade food prepared by talented home chefs from around the world. 
      </p>
      <p className="mt-5">
        <a className="inline-flex items-center gap-x-1 font-medium text-blue-600 " href="#">
          Grow your business with wajbah
          <svg className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </p>
    </div>

    <div className="space-y-6 lg:space-y-10">
      <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
            Delicious homemade food
          </h3>
          <p className="mt-1 text-gray-600 ">
          Experience the essence of Egypt through our app's delightful homemade fare. Discover the rich flavors of traditional Egyptian cuisine lovingly prepared by skilled home chefs.
          </p>
        </div>
      </div>

      <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
            Always stay updated
          </h3>
          <p className="mt-1 text-gray-600 ">
          Track your order effortlessly with our user-friendly app. From the moment you place your order to its delivery at your doorstep, stay informed every step of the way. 
          </p>
        </div>
      </div>

      <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
        </span>
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
            Lightining-fast delivery
          </h3>
          <p className="mt-1 text-gray-600 ">
          fresh food guaranteed with our service. We pride ourselves on our lightning-fast delivery times, ensuring your homemade meals reach you promptly. 
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Description
