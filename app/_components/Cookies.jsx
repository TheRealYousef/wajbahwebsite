"use client"
import React, { useState } from 'react'

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
      console.log("Accepted");
      setIsVisible(false);
    };
  
    const handleReject = () => {
      console.log("Rejected");
      setIsVisible(false);
    };
  
  return (
    <>
    {isVisible && (
      <div className="fixed bottom-0 end-0 z-[60] sm:max-w-xl w-full mx-auto p-6">
        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm ">
          <div className="grid sm:flex sm:items-center gap-y-3 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:max-w-sm">
              <h2 className="text-gray-500">
                <span className="font-semibold text-gray-800 ">
                  We use cookies
                </span>{' '}
                to analyze our traffic and create a smooth user experience.
              </h2>
            </div>
            <div className="inline-flex gap-x-2">
              <div>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-10 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-90 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={handleAccept}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Cookies
