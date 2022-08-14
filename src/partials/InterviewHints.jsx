import React from "react";

function Card({ question, type }) {
  return (
    <div
      data-aos="fade-up"
      className="w-4/5 mx-auto text-justify border-blue-500 py-6 border-y"
    >
      <p className="text-xl font-bold">{question}</p>
      <p>{type}</p>
    </div>
  );
}

export default function InterviewHints() {
  const data = [
    {
      question: "Tell me about yourself",
      typeOfAnswer:
        "When an interviewer asks this question, they want to know as a person and what interests you. You should give a feel for your skills and you can benefit their company. This question can lead to a more natural conversation till the end of interview",
    },
    {
      question: "What is your greatest strength?",
      typeOfAnswer:
        "Like most questions you’ll hear at a job interview, a hiring manager is trying to determine if your skill set is what’s required for the open job or not. The strengths you mention in your reply should be the one that would be best required for the position, not the one which is actually present in you.",
    },
    {
      question: "What are your hobbies/interests outside work?",
      typeOfAnswer:
        "This helps the interviewer get an idea whether you lead a balanced life or whether you are too focused to have hobbies and outside interests and also regarding the kind of person you are.",
    },
    {
      question:
        "Tell me about a time when you handled a challenging situation.",
      typeOfAnswer:
        "With this question, the interviewer wants to see how you handle challenging situations when they arise. A great example is one where you successfully problem-solved to overcome the challenge. It could also be an example of a time you made mistakes in handling the challenge but learned from the experience and know what you would do differently next time.",
    },
    {
      question:
        "Tell me about a time when you made a mistake. What did you do to correct it?",
      typeOfAnswer:
        "The interviewer understands that everyone makes mistakes. What they want to know, with this question, is how you handle mistakes. A great response to this question is one in which you take full responsibility for the mistake, worked hard to correct it and took steps to minimize the likelihood that it would happen again.",
    },
    {
      question:
        "Tell me about a time when you were in conflict with a peer and how the situation was resolved.",
      typeOfAnswer:
        "In workplaces where there are a large number of people with different personality types and communication styles, conflicts can occur. The interviewer wants to see, with this question, how you handle conflicts in the workplace and what your conflict resolution strategy is. A great answer is one where you demonstrate a specific strategy that you used to resolve a problem and find a mutually agreeable resolution.",
    },
    {
      question: "Tell me about how you work under pressure.",
      typeOfAnswer:
        "The interviewer is using this question to see how well you work under pressure and what strategies you have used in the past to handle the pressure. This question is especially important if you're interviewing for a high-stress job. A great answer will give a specific example of how you managed a high-pressure situation successfully. It could also include what you would have done differently, looking back.",
    },
    {
      question: "Give me an example of how you set goals.",
      typeOfAnswer:
        "This question is designed to show the interviewer how well you plan and set goals. A great answer is one where you discuss an ambitious goal you set for yourself and how you came up with a plan for success.",
    },
    {
      question:
        "Give me an example of a time you made a decision that was unpopular and explain how you handled implementing it.",
      typeOfAnswer:
        "Managers sometimes have to make difficult decisions that aren't popular with all employees. The interviewer wants to know how you handle this situation and how you implemented the new policy or plan. A great answer is one where you show you moved forward with the decision but communicated your reasoning to garner the support of more of the employees.",
    },
    {
      question:
        "Share an example of how you were able to motivate a coworker, your peers or your team.",
      typeOfAnswer:
        "With this question, the interviewer is evaluating your ability and willingness to lead, even informally. A great answer is one that shows you provided encouragement and offered help in some way. This could mean you offered to help with some work if they've fallen behind or that you suggested helping them with strategies to move through their work more quickly and efficiently.",
    },
    {
      question:
        "Tell me about a goal you set and reached and how you achieved it.",
      typeOfAnswer:
        "For this question, the interviewer wants to see how you plan to achieve a goal. A good answer is one where you were given a goal, created a plan and followed the necessary steps to achieve it. A great answer is one where you set your own goal, especially a large goal, and took the necessary steps to reach it.",
    },
    {
      question:
        "Tell me about the last time your workday ended before you were able to get everything done.",
      typeOfAnswer:
        "This question is designed to evaluate your commitment, work ethic, prioritization skills and ability to communicate. While the interviewer doesn't expect heroic efforts daily, they do want to see a level of dedication to getting your job done. A great answer is that you either stayed late to finish your work, came in early the next day or prioritized differently. It's also important to emphasize that you communicated to others that you might miss a deadline in case changes need to be made or clients need to be contacted.",
    },
    {
      question: "Tell me about a goal you failed to achieve.",
      typeOfAnswer:
        "With this question, the interviewer is evaluating how you handle disappointment and failure. They also want to see how you decide when it's time to give up, accept that something didn't work and move forward. A great response is one where you set a huge goal, didn't achieve it, took responsibility and learned from the experience. Some examples of things you could learn from it are what you would do differently next time, something about yourself, what motivates you or what is truly important to you.",
    },
  ];

  return (
    <div data-aos="fade-up" id="facetheinterview">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mb-2 mt-16">Face The Interview</h1>
        <h4 className="h4 mb-2 font-light text-gray-600 capitalize">
          How to answer Common Interview Questions
        </h4>
      </div>
      {data.map((item) => (
        <Card question={item.question} type={item.typeOfAnswer} />
      ))}
    </div>
  );
}
