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
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
