import React from "react";

function Card({ question, answer }) {
  return (
    <div
      data-aos="fade-up"
      className="w-4/5 mx-auto text-left border-emerald-500 py-6 border-y"
    >
      <p className="text-xl font-bold">{question}</p>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  );
}

export default function FAQ() {
  const data = [
    {
      question: "What does \"Sponsor = Yes\" mean?",
      answer:
        "It means the company is on the UK Home Office's Sponsor Register — they are licensed to sponsor Skilled Worker visas. However, being on the register doesn't guarantee every role at that company sponsors. It significantly increases your chances compared to companies that can't sponsor at all.",
    },
    {
      question: "Is this only for software engineering jobs?",
      answer:
        "Yes. The list focuses specifically on UK Software Engineering roles — including Graduate, Junior, and Mid-level positions. We filter out unrelated jobs so you only see relevant opportunities.",
    },
    {
      question: "How often is the list updated?",
      answer:
        "The list is pulled fresh on the day of purchase. Each file is timestamped so you know exactly when the data was collected. Jobs expire fast, so freshness matters.",
    },
    {
      question: "How do I receive the file?",
      answer:
        "After payment confirmation, I'll send the Excel file directly to your WhatsApp as a document attachment. You can also request delivery via email. Delivery is immediate.",
    },
    {
      question: "Can I get more than 50 jobs?",
      answer:
        "Yes! I offer a larger package with 120 jobs for £10 GBP. Just mention this when you message on WhatsApp.",
    },
    {
      question: "Do you guarantee interviews or job offers?",
      answer:
        "No. This is a data product — a curated, filtered job list. It saves you time finding roles and helps you avoid obvious dead ends. The applying, interviewing, and landing the job is up to you.",
    },
    {
      question: "What if a job link is dead?",
      answer:
        "Job links can sometimes expire even within hours of posting — it's the nature of competitive roles. Each row includes the company name and job title, so you can easily search for the role directly if needed. Most links will work fine.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "Refund if the file is not delivered or is corrupted/unopenable. No refunds for 'I didn't like the jobs' — that's subjective. If something is genuinely wrong with your file, I'll send a replacement.",
    },
    {
      question: "How do I pay?",
      answer:
        "Payment is via UK bank transfer (Lloyds Bank). After you message on WhatsApp, I'll send you the account details. Once you share the payment screenshot, I'll deliver your file immediately.",
    },
    {
      question: "Why should I trust you?",
      answer:
        "I send a preview screenshot of the first 5 rows (with links blurred) before you pay, so you can see the format and quality. The file uses consistent formatting, clear timestamps, and focuses specifically on UK SWE roles. No scams — just a useful data product.",
    },
  ];

  return (
    <div data-aos="fade-up" id="faq">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mb-2 mt-16">Frequently Asked Questions</h1>
        <h4 className="h4 mb-2 font-light w-4/5 text-center mx-auto text-gray-600">
          Everything you need to know before buying
        </h4>
      </div>
      {data.map((item, i) => (
        <Card key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
