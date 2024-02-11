import React from "react";

function Card({ question, type }) {
  return (
    <div className="w-full p-6 mx-auto text-justify transition-all border border-blue-500 rounded-lg hover:shadow-lg hover:border-blue-700 hover:scale-105 hover:bg-gray-50">
      <p className="text-xl font-bold">{question}</p>
      <p>{type}</p>
    </div>
  );
}

export default function InterviewHints() {
  const data = [
    {
      question: "Consultation",
      typeOfAnswer:
        "We start by understanding your business goals, target audience, and lead generation requirements through a thorough consultation process.",
    },
    {
      question: "Customized Lead Packages",
      typeOfAnswer:
        "Based on your specific needs, we create customized lead packages designed to deliver maximum impact and ROI for your business.",
    },
    {
      question: "Optimization and Quality Assurance",
      typeOfAnswer:
        "We refine our lists through advanced analytics to ensure that every contact not only matches your target criteria but also has a high propensity for engagement.",
    },
    {
      question: "Delivery",
      typeOfAnswer:
        "Once your lead package is ready, we deliver it directly to you, providing all the information you need to start engaging with your new prospects immediately.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      id="lead_generation_process"
      className="max-w-4xl mx-auto"
    >
      <div className="pb-12 text-center md:pb-16">
        <h1 className="mt-16 mb-2 h2">Our Lead Generation Process</h1>
        <h4 className="w-4/5 mx-auto mb-2 text-center text-gray-600 text-balance">
          Here's a brief overview of our lead generation process and what you
          can expect when working with Signiify.
        </h4>
      </div>

      <div className="grid w-full gap-8 px-4 lg:grid-cols-2">
        {data.map((item, i) => (
          <Card key={i} question={item.question} type={item.typeOfAnswer} />
        ))}
      </div>
    </div>
  );
}
