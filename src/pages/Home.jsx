import React from "react";

import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Footer from "../partials/Footer";
import FreeReview from "../partials/FreeReview";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FAQ from "../partials/InterviewHints";
import Pricing from "../partials/Statistics";

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
        <FeaturesBlocks />
        <Pricing />
        <FAQ />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <FreeReview />
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
