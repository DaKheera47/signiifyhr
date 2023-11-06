import React, { useState } from "react";


function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <span
              data-aos="zoom-y-out"
              duration-aos="300"
              className="w-full mb-24 text-5xl font-extrabold tracking-tight text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400"
            >
              SIGNIIFY
            </span>
            <h1
              className="my-3 text-xl font-medium tracking-tight md:text-4xl"
              data-aos="zoom-y-out"
            >
              Your Online Career Coach
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-lg text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                If you are hunting for the dream job, go with the right tools.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    data-aos="fade-right"
                    target="_blank"
                    rel="noreferrer"
                    href="https://forms.gle/UJDtkpJjDDkYQMK38"
                    className="w-full mb-4 text-white capitalize bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mr-3"
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
                        <span className="ml-1 font-sans font-semibold text-md">
                          CV Reviewed
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
                    href="#whatsigniifydoes"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
