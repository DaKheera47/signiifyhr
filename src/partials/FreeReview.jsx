import React from "react";

export default function FreeReview() {
  return (
    <div
      data-aos="fade-up"
      className="py-12 sm:py-24 w-full text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 shadow-md"
    >
      <h5 className="mb-2 text-3xl font-bold text-gray-900">
        Ready to Stop Scrolling?
      </h5>
      <p className="mb-5 text-base text-gray-600 sm:text-lg w-4/5 text-center md:w-3/5 mx-auto">
        Get your curated UK Software Engineering job list delivered to WhatsApp in minutes. Fresh data, sponsor-capable companies, ready to apply.
      </p>
      <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          data-aos="fade-right"
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/447412249600?text=Hi%2C%20I%27d%20like%20to%20buy%20the%20UK%20SWE%20Jobs%20list"
          className="btn capitalize text-white bg-emerald-600 hover:bg-emerald-700 w-4/5 md:w-full max-w-xl mb-4 sm:w-auto sm:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className="text-left">
            <div className="text-sm">
              Message on
              <span className="ml-1 font-sans text-md font-semibold">
                WhatsApp
              </span>
            </div>
          </div>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        I'll send you a preview of the first 5 rows before payment
      </p>
    </div>
  );
}
