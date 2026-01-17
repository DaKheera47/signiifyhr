import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative" id="whyitworks">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Why This Job List Works</h2>
            <p className="text-xl text-gray-600">You're paying for curated, filtered, ready-to-use data — not another job board subscription.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <circle cx="32" cy="32" r="12" />
                    <path d="M32 20v24M20 32h24" strokeLinecap="round" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Freshness</h4>
              <p className="text-gray-600 text-center">Jobs pulled daily. No stale listings. Links that actually work.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <path d="M24 24l8 8 12-12" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="20" y="28" width="24" height="16" rx="2" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Quality Filtering</h4>
              <p className="text-gray-600 text-center">No junk. No duplicates. Only software engineering roles worth applying to.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <path d="M32 20v8M28 28h8M24 36h16M20 44h24" strokeLinecap="round" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sponsor-Aware</h4>
              <p className="text-gray-600 text-center">Every job tagged with sponsor status. Stop wasting time on companies that can't sponsor.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <rect x="22" y="22" width="20" height="20" rx="2" />
                    <path d="M22 30h20M30 22v20" />
                  </g>
                </g>
              </svg>              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Excel Ready</h4>
              <p className="text-gray-600 text-center">Universal format. Sort, filter, and apply from one clean spreadsheet.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <circle cx="32" cy="28" r="8" />
                    <path d="M20 48c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Time Saved</h4>
              <p className="text-gray-600 text-center">2-3 hours of searching done for you. Spend time applying, not scrolling.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-emerald-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" stroke="white">
                    <path d="M32 20l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" strokeLinejoin="round" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Less Decision Fatigue</h4>
              <p className="text-gray-600 text-center">50 curated jobs beats infinite scrolling. Turn searching into doing.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
