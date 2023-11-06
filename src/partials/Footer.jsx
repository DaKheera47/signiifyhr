import React from "react";
import logo from "../images/signiify.jpeg";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          {/* <img className="w-8" src={logo} alt="logo" /> */}
          <span className="ml-3 text-xl">By Signiify HR</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © {new Date().getFullYear()} Signiify HR
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="text-gray-500"
            href="https://www.facebook.com/oxfordactivity"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
