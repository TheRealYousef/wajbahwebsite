"use client"

import  { useState } from 'react';

const FAQ = () => {
 
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div id="FAQ-Section" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Frequently asked questions</h2>
            <p className="mt-1 hidden md:block text-gray-600">Answers to the most frequently asked questions.</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200 d">

            {/* Question 1 */}
            <div className="hs-accordion pb-3">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 "
                onClick={toggleAccordion1}
                aria-expanded={isOpen1 ? 'true' : 'false'}
              >
                Can I cancel at anytime?
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen1 ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen1 ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isOpen1 ? 'block' : 'hidden'
                }`}
                aria-hidden={!isOpen1}
              >
                <p className="text-gray-600 ">
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if
                  you will give us some feedback.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="hs-accordion pt-6 pb-3">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 "
                onClick={toggleAccordion2}
                aria-expanded={isOpen2 ? 'true' : 'false'}
              >
                My team has credits. How do we use them?
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen2 ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen2 ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isOpen2 ? 'block' : 'hidden'
                }`}
                aria-hidden={!isOpen2}
              >
                <p className="text-gray-600 ">
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and
                  dial in the details.
                </p>
              </div>
            </div>


            {/* Question 3 */}
            <div className="hs-accordion pt-6 pb-3">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 "
                onClick={toggleAccordion3}
                aria-expanded={isOpen3 ? 'true' : 'false'}
              >
                is Wajbah available in my area ?
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen3 ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen3 ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isOpen3 ? 'block' : 'hidden'
                }`}
                aria-hidden={!isOpen3}
              >
                <p className="text-gray-600 ">
                The easiest way to check if wajbah is available is your area is to begin the sign up process. If we don't operate in your area, 
                we will keep your details to reach out once we grow our operations.
                </p>
              </div>
            </div>


            {/* Question 4 */}
            <div className="hs-accordion pt-6 pb-3">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 "
                onClick={toggleAccordion4}
                aria-expanded={isOpen4 ? 'true' : 'false'}
              >
                What documents do i need to become wajbah kithcen ?
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen4 ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className={`flex-shrink-0 size-5 text-gray-600 ${isOpen4 ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  isOpen4 ? 'block' : 'hidden'
                }`}
                aria-hidden={!isOpen4}
              >
                <ul className="list-disc ml-6 mt-4 text-grey-600">
                        
                          <p>We will ask you to provide a copy of the following documents so we can verify and validate things on our side:</p>
                        
                        <li>
                          <p>Commercial Registration</p>
                        </li>
                        <li>
                          <p>Trademark (if applicable)</p>
                        </li>
                        <li>
                          <p>National ID with clear signature</p>
                        </li>
                        <li>
                          <p>VAT (if applicable)</p>
                        </li>
                        <li>
                          <p>Power of Attorney (if applicable)</p>
                        </li>
                        <li>
                          <p>Bank Certificate (if applicable)</p>
                        </li>
                        <li>
                          <p>Email declaration signed and stamped</p>
                        </li>
                        <li>
                          <p>Proof of payment for the registration fee</p>
                        </li>
                        <li>
                          <p>Logo</p>
                        </li>
                        <li>
                          <p>Cover Photo</p>
                        </li>
                        </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
