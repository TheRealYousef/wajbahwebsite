import React from 'react'

const Team = () => {
  return (
    <div className="max-w-5xl px-4  sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Wathb team</h2>
        <p className="mt-1 text-gray-600 ">Creative people</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12">
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/zezo.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Abdulaziz Ahmed
            </h3>
            <p className="text-sm text-gray-600 ">
              Leader / Data eng.
            </p>
          </div>
        </div>
    
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/osama.png" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Muhamed Osama
            </h3>
            <p className="text-sm text-gray-600 ">
              Mobile Developer
            </p>
          </div>
        </div>
    
        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="yousef.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Yousef Mohsen
            </h3>
            <p className="text-sm text-gray-600 ">
            Front-end Developer , UI/UX
            </p>
          </div>
        </div>

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/kareem.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Kareem Alaa
            </h3>
            <p className="text-sm text-gray-600 ">
              Mobile Developer
            </p>
          </div>
        </div>

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/ziad.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Ziad khaled
            </h3>
            <p className="text-sm text-gray-600 ">
              Back-end engineer
            </p>
          </div>
        </div>

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/lena.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Lena Gamal
            </h3>
            <p className="text-sm text-gray-600 ">
            Back-end engineer
            </p>
          </div>
        </div>

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/mariam.jpg" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Mariam Sameh
            </h3>
            <p className="text-sm text-gray-600 ">
            Back-end engineer
            </p>
          </div>
        </div>

        <div className="text-center">
          <img className="rounded-full size-24 mx-auto" src="/malk.png" alt="Image Description"/>
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800 ">
              Malk Ahmad
            </h3>
            <p className="text-sm text-gray-600 ">
              Machine Learing eng.
            </p>
          </div>
        </div>

       
    </div>
    </div>
  )
}

export default Team
