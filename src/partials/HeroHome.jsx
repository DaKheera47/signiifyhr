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
              className="w-full mb-24 text-5xl font-extrabold tracking-tight text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400"
            >
              UK SWE JOBS
            </span>
            <h1
              className="my-3 text-xl font-medium tracking-tight md:text-4xl"
              data-aos="zoom-y-out"
            >
              50 UK Software Engineering Jobs, Updated Daily
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-lg text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Stop wasting hours scrolling job boards. Get a curated Excel file with fresh, sponsor-capable UK tech jobs — ready to apply immediately.
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
                    href="https://wa.me/447412249600?text=Hi%2C%20I%27d%20like%20to%20buy%20the%20UK%20SWE%20Jobs%20list"
                    className="w-full mb-4 text-white capitalize bg-emerald-600 btn hover:bg-emerald-700 sm:w-auto sm:mb-0"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <div className="text-left">
                      <div className="text-sm">
                        Get Your
                        <span className="ml-1 font-sans font-semibold text-md">
                          Job List Now
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4"
                    href="#whatyouget"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Updated Today</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sponsor-Capable Companies</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Instant Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
