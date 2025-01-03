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
    <section className="relative" id="whatsigniifydoes">
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
            <h1 className="mb-4 h2">What does Signiify offer?</h1>
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
                      : "bg-blue-100 border-transparent"
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
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Review your résumé
                    </div>
                  </div>
                </a>
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-100 border-transparent"
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
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Revamp your résumé & cover letter/email
                    </div>
                  </div>
                </a>
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-100 border-transparent"
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
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Face the interview
                    </div>
                  </div>
                </a>

                {/* item 4 */}
                <a
                  className={`flex capitalize items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-blue-100 border-transparent"
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
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                    </div>
                    <div className="font-bold tracking-tight">
                      Applicant Tracking Systems (ATS) Optimisation
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
                        You send us your existing resume and we will review it
                        and send you 3-5 recommendations on how to improve it to
                        make a better document.
                      </li>

                      <li className="py-2">This service costs 5 GBP.</li>

                      <li className="py-2">
                        You can send your CV in PDF, Microsoft Word, or any
                        image format
                      </li>

                      <li className="py-2">
                        Fill the form{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://forms.gle/UJDtkpJjDDkYQMK38"
                        >
                          here
                        </a>{" "}
                        and send us your CV.
                      </li>

                      <a
                        data-aos="fade-right"
                        target="_blank"
                        rel="noreferrer"
                        href="https://forms.gle/UJDtkpJjDDkYQMK38"
                        className="w-full mx-auto my-4 mb-4 text-white capitalize bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0"
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
                  <div className="relative inline-flex flex-col text-left h-[750px] md:h-[475px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-0.5">
                        You need to be ready to go into the new job hunt in a
                        different way from the approach you might have used
                        before. This is not just an attempt to find a job. This
                        is a decision to find the best possible job that falls
                        in line with your skill set, needs, and desires.
                      </li>
                      <li className="py-0.5">
                        For this, our expert staff take 7 days during which one
                        of our HR experts comes in contact with you over a
                        WhatsApp Group to understand more about your expertise,
                        personal skills, experiences, and the type of your dream
                        job.
                      </li>
                      <li className="py-0.5">
                        The résumé needs to be rewritten in order to emphasize
                        the skills that will best help you land your ideal job.
                        Your résumé doesn't only need all qualifications,
                        personal skills and experience, it needs to be crafted
                        so that it would find the right career or company.
                      </li>
                      <li className="py-0.5">
                        Some résumés might simply want to start from scratch,
                        thinking about the skills the candidate has to offer,
                        and some need to revamp an outdated version.
                      </li>
                      <li className="py-0.5">
                        This is a paid service, GBP 60 for 2 pages resume and a
                        cover letter/email.
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
                  <div className="relative inline-flex flex-col text-left h-[750px] md:h-[500px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-0.5">
                        Land the interview. Don't go at it alone. Let us help
                        you ace it.
                      </li>
                      <li className="py-0.5">
                        Finally, you will need to have a clear idea of the
                        desired outcome. You should be able to answer the
                        question, "Why are you applying for this job?" without
                        hesitation. If you can answer that question, you can
                        move to the actual job hunting process.
                      </li>
                      <li className="py-0.5">
                        Your revamped resume is usually successful to get an
                        interview call. Whether you are fresh or experienced;
                        you need to re-polish your interview skills. Here,
                        Signiify is able to facilitate.
                      </li>
                      <li className="py-0.5">
                        We arrange phone, Zoom, Skype, or WhatsApp Interview
                        Preparation with one of our panel of interview
                        consultants for a duration of fifty minutes. Our mock
                        interview service is to help the candidates to handle
                        tricky questions during job interviews. These questions
                        will lead to success and failure. Not only questions and
                        answers but the overall body language is also
                        responsible for the outcome of the job interview.
                      </li>
                      <li className="py-0.5">
                        Please note that the MOCK INTERVIEWS are arranged online
                        on weekends. You need to set up your webcam and
                        microphone before the given time.
                      </li>
                      <li className="py-0.5">
                        The paid service will cost you GBP 120
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
                  <div className="relative inline-flex flex-col text-left h-[750px] md:h-[500px]">
                    <ul className="mx-6 text-sm font-light list-disc sm:text-md md:ml-6">
                      <li className="py-0.5">
                        Are you applying for numerous positions but not getting
                        any response?
                      </li>

                      <li className="py-0.5">
                        Companies these days commonly utilize applicant tracking
                        systems (ATS) to streamline their hiring process.
                        Resumes submitted to an ATS are stored in a database,
                        and hiring managers use keywords to search for suitable
                        candidates. If your resume matches these keywords, it's
                        visible; if not, it remains hidden, often resulting in
                        no response to job applications.
                      </li>

                      <li className="py-0.5">
                        This lack of response occurs because a single generic
                        resume rarely aligns perfectly with all job
                        descriptions. Tailoring your resume to each position
                        increases your chances of securing interviews.
                      </li>

                      <li className="py-0.5">
                        We will do this for you. Just three steps away:
                        <br />
                        <ol className="list-decimal">
                          <li className="ml-4">Submit your resume.</li>
                          <li className="ml-4">Share the job listing.</li>
                          <li className="ml-4">
                            We conduct 30+ checks on your resume, generating a
                            score indicating how well it fits the specific job
                            and suggesting necessary optimizations.
                          </li>
                        </ol>
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
