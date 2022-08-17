import React from "react";

import FeaturesHome from "../partials/Features";
import Footer from "../partials/Footer";
import FreeReview from "../partials/FreeReview";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import InterviewHints from "../partials/InterviewHints";
import PDFRender from "../partials/PDFRender";
import Statistics from "../partials/Statistics";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        {/* <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
        <Statistics />
        <InterviewHints />
        <PDFRender />
        <FreeReview />
        <div
          id="payment"
          data-aos="fade-up"
          className="py-12 sm:py-24 w-full text-center bg-white rounded-lg border shadow-md"
        >
          <h5 className="mb-5 text-3xl font-bold text-gray-900">How to Pay</h5>
          <p className="text-base text-gray-500 sm:text-lg w-4/5 text-center md:w-3/5 mx-auto">
            Online bank transfer is available for all our services.
          </p>

          <p className="mb-5 text-base md:text-xl text-blue-800 hover:underline underline-offset-2 sm:text-lg w-4/5 text-center md:w-3/5 mx-auto">
            IBAN PK83NAYA1234503215344604
          </p>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
