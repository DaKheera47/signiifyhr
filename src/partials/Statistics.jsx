import React from "react";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section
      data-aos="fade-up"
      id="stats"
      className="text-gray-600 body-font mb-52"
    >
      <div className="max-w-3xl mx-auto text-center text-black">
        <h1 className="h2 mb-2">Services Offered</h1>
      </div>
      <div className="container px-5 my-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/3 w-1/2">
            <CountUp
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              enableScrollSpy={true}
              duration={1}
              end={110345}
              suffix="+"
            />
            <p className="leading-relaxed">Resume Reviews</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <CountUp
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              enableScrollSpy={true}
              duration={1}
              end={593}
              suffix="+"
            />
            <p className="leading-relaxed">Revamped Resumes & Cover Letters</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <CountUp
              className="title-font font-medium sm:text-4xl text-3xl text-gray-900"
              enableScrollSpy={true}
              duration={1}
              end={351}
              suffix="+"
            />
            <p className="leading-relaxed">Interviews Conducted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
