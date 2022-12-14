import React from "react";

export default function FreeReview() {
  return (
    <div
      data-aos="fade-up"
      className="py-12 sm:py-24 w-full text-center bg-white rounded-lg border shadow-md"
    >
      <h5 className="mb-2 text-3xl font-bold text-gray-900">
        Get your Résumé Reviewed
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg w-4/5 text-justify md:w-3/5 mx-auto">
        You send us your existing resume and we will review it and send you 3-5
        recommendations on how to improve it to make a better document.
      </p>
      <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          data-aos="fade-right"
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/UJDtkpJjDDkYQMK38"
          className="btn capitalize text-white bg-blue-600 hover:bg-blue-700 w-4/5 md:w-full max-w-xl mb-4 sm:w-auto sm:mb-0"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <div className="text-left">
            <div className="text-sm">
              Get Your
              <span className="ml-1 font-sans text-md font-semibold">
                CV Reviewed
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
