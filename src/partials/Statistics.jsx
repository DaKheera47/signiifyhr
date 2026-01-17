import React from "react";

export default function Pricing() {
  return (
    <section
      data-aos="fade-up"
      id="pricing"
      className="text-gray-600 body-font my-16"
    >
      <div className="max-w-3xl mx-auto text-center text-black mb-8">
        <h1 className="h2 mb-2">Simple Pricing</h1>
        <p className="text-lg text-gray-600">If this saves you even one hour, it pays for itself.</p>
      </div>
      
      {/* Pricing Cards */}
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap justify-center gap-8 -m-4">
          {/* Standard Package */}
          <div className="p-4 w-full max-w-sm">
            <div className="h-full p-8 rounded-lg border-2 border-gray-200 bg-white flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow">
              <h2 className="text-sm tracking-widest text-gray-500 mb-1 font-medium uppercase">Standard</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none font-bold">
                £5
                <span className="text-lg ml-1 font-normal text-gray-500">GBP</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>50 UK Software Jobs
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sponsor Status Marked
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Excel File Format
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Updated Today
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Instant WhatsApp Delivery
              </p>
              <a 
                href="https://wa.me/447412249600?text=Hi%2C%20I%27d%20like%20to%20buy%20the%2050%20jobs%20package%20(£5)"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-auto text-white bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 rounded justify-center font-medium"
              >
                Get 50 Jobs
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center">PKR 1,500 equivalent</p>
            </div>
          </div>

          {/* Premium Package */}
          <div className="p-4 w-full max-w-sm">
            <div className="h-full p-8 rounded-lg border-2 border-emerald-500 bg-white flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow">
              <span className="bg-emerald-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl font-medium">BEST VALUE</span>
              <h2 className="text-sm tracking-widest text-gray-500 mb-1 font-medium uppercase">Premium</h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none font-bold">
                £10
                <span className="text-lg ml-1 font-normal text-gray-500">GBP</span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span><strong>120 UK Software Jobs</strong>
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Sponsor Status Marked
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Excel File Format
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Updated Today
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-emerald-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Instant WhatsApp Delivery
              </p>
              <a 
                href="https://wa.me/447412249600?text=Hi%2C%20I%27d%20like%20to%20buy%20the%20120%20jobs%20package%20(£10)"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-auto text-white bg-emerald-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-emerald-700 rounded justify-center font-medium"
              >
                Get 120 Jobs
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center">PKR 3,000 equivalent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value proposition */}
      <div className="max-w-2xl mx-auto mt-16 text-center">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">What You're Really Paying For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">2-3 hrs</div>
              <div className="text-gray-600 text-sm">of searching saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-gray-600 text-sm">wasted applications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">actionable leads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
