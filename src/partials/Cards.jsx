import React from "react";

// Define the content for each card in an array
const cardContents = [
  {
    heading: "Premium Quality",
    content:
      "Our leads are meticulously curated to ensure accuracy, relevance, and high conversion potential. Say goodbye to generic leads and hello to prospects ready to engage with your business.",
  },
  {
    heading: "Customized Solutions",
    content:
      "We recognize that every business is unique. That's why we offer customized lead packages tailored to your specific industry, target market, and business objectives. With Signiify, you'll receive leads that align perfectly with your needs and goals.",
  },
  {
    heading: "Time and Cost Efficiency",
    content:
      "Don't waste time and resources on ineffective lead generation strategies. With Signiify, you can save valuable time and money by accessing premium leads that deliver real results for your business.",
  },
  {
    heading: "Data-Driven Email Lists",
    content:
      "Signiify stands out by specializing in the creation of data-driven email lists tailored to your business's specific needs. Our lists are built from extensive research, ensuring that you connect directly with your most relevant audience.",
  },
];

// Component to render each card
const Card = ({ heading, content }) => (
  <figure className="flex flex-col items-center justify-center p-8 m-4 text-center transition-all bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-100 hover:scale-105 md:rounded-lg hover:shadow-lg">
    <blockquote className="max-w-2xl mx-auto text-gray-500">
      <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>
      <p className="my-4">{content}</p>
    </blockquote>
  </figure>
);

export default function Cards({}) {
  return (
    <div className="max-w-5xl mx-auto" id="whatsigniifydoes">
      {/* Section header */}
      <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
        <h1 className="mb-4 h2">Why Choose Signiify?</h1>

        <p className="w-4/5 mx-auto mb-2 font-light text-center text-gray-600 text-balance">
          If you're ready to supercharge your sales and expand your customer
          base, you've come to the right place. At Signiify, we understand the
          importance of quality leads in driving business success. Here's why
          we're your top choice for lead generation:
        </p>
      </div>

      <div className="grid mb-8 bg-white md:mb-12 md:grid-cols-2">
        {cardContents.map((card, index) => (
          <Card key={index} heading={card.heading} content={card.content} />
        ))}
      </div>
    </div>
  );
}
