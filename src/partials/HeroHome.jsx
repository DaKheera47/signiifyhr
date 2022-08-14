import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <span
              data-aos="zoom-y-out"
              duration-aos="300"
              className="text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-400 w-full mb-24 tracking-tight"
            >
              SIGNIIFY
            </span>
            <h1
              className="text-xl md:text-4xl font-medium my-3 tracking-tight"
              data-aos="zoom-y-out"
            >
              Your Online Career Coach
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg text-gray-600 mb-8"
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
                    class="btn capitalize text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
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
                    <div class="text-left">
                      <div class="text-sm">
                        Get a free
                        <span class="ml-1 font-sans text-md font-semibold">
                          CV Review
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
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
