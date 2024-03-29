import React from "react";

import FeaturesHome from "../partials/Features";
import Footer from "../partials/Footer";
import FreeReview from "../partials/FreeReview";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import InterviewHints from "../partials/InterviewHints";
import PDFRender from "../partials/PDFRender";
import Statistics from "../partials/Statistics";
import Cards from "../partials/Cards";

function Home() {
  const data = (
    <div>
      <p>Bank Name: LLoyds Bank</p>
      <p>Account Name: Shaheer Sarfaraz</p>
      <p>Account Number: 45423860</p>
      <p>Sort Code: 30-90-90</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome /> */}
        <Cards />
        {/* <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
        {/* <Statistics /> */}
        <InterviewHints />
        {/* <PDFRender /> */}
        {/* <FreeReview /> */}

        <div
          data-aos="fade-up"
          className="w-full py-12 text-center bg-white border rounded-lg shadow-md sm:py-24"
        >
          <h5 className="mb-5 text-3xl font-bold text-gray-900">
            Get Started Today
          </h5>
          <p className="w-4/5 mx-auto text-base text-center text-gray-500 text-balance sm:text-lg md:w-3/5">
            Ready to take your business to the next level with premium leads
            from Signiify? Contact us today to discuss your lead generation
            needs and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* <div
          id="payment"
          data-aos="fade-up"
          className="w-full py-12 text-center bg-white border rounded-lg shadow-md sm:py-24"
        >
          <h5 className="text-3xl font-bold text-gray-900">How to Pay</h5>
          <p className="w-4/5 mx-auto mb-4 text-base text-center text-gray-500 sm:text-lg md:w-3/5">
            Online bank transfer is available for all our services.
          </p>

          <p className="w-4/5 mx-auto mb-5 text-base text-center text-blue-800 md:text-xl sm:text-lg md:w-3/5">
            {data}
          </p>
        </div> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
