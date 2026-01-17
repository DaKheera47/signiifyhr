import React, { useEffect, useRef, useState } from "react";
import Transition from "../utils/Transition";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative" id="whatyouget">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 mb-16 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2">What's Inside Your Job List?</h1>
            <p className="text-lg text-gray-600">
              A clean, actionable Excel file designed to get you applying in minutes, not hours.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-emerald-100 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-white rounded-full shadow">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      50+ Fresh UK Software Jobs
                    </div>
                  </div>
                </a>
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-emerald-100 border-transparent"
                  }`}
                  href="#1"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-white rounded-full shadow">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Sponsor Status Filtered
                    </div>
                  </div>
                </a>
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-emerald-100 border-transparent"
                  }`}
                  href="#2"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-white rounded-full shadow">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Ready-to-Use Format
                    </div>
                  </div>
                </a>

                {/* item 4 */}
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-emerald-100 border-transparent"
                  }`}
                  href="#3"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-white rounded-full shadow">
                      <svg
                        className="w-3 h-3 fill-current text-emerald-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Instant WhatsApp Delivery
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col text-left h-[450px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-2">
                        <strong>50 curated jobs</strong> from top UK tech companies,
                        pulled fresh the same day you purchase.
                      </li>

                      <li className="py-2">
                        Focus on <strong>Graduate, Junior, and Mid-level</strong> Software Engineering roles.
                      </li>

                      <li className="py-2">
                        Jobs sourced from multiple platforms including LinkedIn,
                        Indeed, Gradcracker, and company career pages.
                      </li>

                      <li className="py-2">
                        <strong>Duplicates removed</strong> — no wasted time seeing
                        the same job from different boards.
                      </li>

                      <li className="py-2">
                        Only relevant positions — irrelevant or non-software roles
                        are filtered out.
                      </li>
                    </ul>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col text-left h-[450px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-2">
                        Each job is marked with <strong>"Sponsor: Yes/No"</strong> based
                        on whether the company is on the UK Sponsor Register.
                      </li>
                      <li className="py-2">
                        Companies marked "Yes" are <strong>licensed to sponsor visas</strong>, 
                        meaning they have the legal ability to sponsor Skilled Worker visas.
                      </li>
                      <li className="py-2">
                        <strong>Important:</strong> Being on the sponsor list doesn't guarantee
                        every role sponsors — but it's a huge improvement over random job board scrolling.
                      </li>
                      <li className="py-2">
                        Save hours by avoiding companies that <strong>cannot sponsor at all</strong>.
                      </li>
                      <li className="py-2">
                        Perfect for international students, recent grads, and career switchers
                        targeting UK opportunities.
                      </li>
                    </ul>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col text-left h-[450px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-2">
                        <strong>Excel file (.xlsx)</strong> with filters already enabled
                        so you can sort and filter instantly.
                      </li>
                      <li className="py-2">
                        Clean columns: Job Title, Company, Location, Hybrid/Remote,
                        Sponsor Status, Job Description, Apply Link.
                      </li>
                      <li className="py-2">
                        <strong>Frozen header row</strong> — scroll through jobs without
                        losing track of columns.
                      </li>
                      <li className="py-2">
                        <strong>Direct application URLs</strong> — click and apply
                        immediately, no searching required.
                      </li>
                      <li className="py-2">
                        Optional extras: Source platform, date pulled, keywords
                        (React, Python, AWS, etc.), and salary when available.
                      </li>
                    </ul>
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col text-left h-[450px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-2">
                        <strong>Message on WhatsApp</strong> — I'll send you a preview
                        of the first 5 rows (links blurred).
                      </li>

                      <li className="py-2">
                        <strong>Pay via bank transfer</strong> — quick and easy.
                      </li>

                      <li className="py-2">
                        <strong>Receive your file immediately</strong> after payment
                        confirmation — as a WhatsApp document or email attachment.
                      </li>

                      <li className="py-2">
                        File naming: <code className="bg-gray-100 px-1 rounded">UK_SWE_JOBS_SponsorYes_YYYY-MM-DD.xlsx</code>
                      </li>

                      <li className="py-2">
                        Start applying <strong>within minutes</strong> of purchase.
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
