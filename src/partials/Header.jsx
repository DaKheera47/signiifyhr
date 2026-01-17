import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="UK SWE Jobs">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#10B981" offset="0%" />
                    <stop stopColor="#34D399" offset="25.871%" />
                    <stop stopColor="#059669" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <div className="hidden md:flex">
                <li>
                  <a
                    href="#whatyouget"
                    className="hover:underline underline-offset-4 font-medium text-gray-600 hover:text-gray-900 px-2 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    What You Get
                  </a>
                </li>
                <li>
                  <a
                    href="#whyitworks"
                    className="hover:underline underline-offset-4 font-medium text-gray-600 hover:text-gray-900 px-2 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Why It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:underline underline-offset-4 font-medium text-gray-600 hover:text-gray-900 px-2 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:underline underline-offset-4 font-medium text-gray-600 hover:text-gray-900 px-2 sm:px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    FAQ
                  </a>
                </li>
              </div>
              <li>
                <a
                  href="https://wa.me/447412249600?text=Hi%2C%20I%27d%20like%20to%20buy%20the%20UK%20SWE%20Jobs%20list"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sm text-gray-200 bg-emerald-600 hover:bg-emerald-700 ml-3"
                >
                  <div className="text-left">
                    <div className="text-sm">
                      Get
                      <span className="ml-1 font-sans text-md font-semibold">
                        Jobs List
                      </span>
                    </div>
                  </div>
                  <svg
                    className="w-3 h-3 fill-current text-emerald-200 flex-shrink-0 ml-4 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
