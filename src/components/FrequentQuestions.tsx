import { useState } from "react";
import Head from "next/head";

type FrequentQuestionsProps = {
  questions: { question: string; answer: string }[];
};

export default function FrequentQuestions({
  questions,
}: FrequentQuestionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>NixLabs Networks | Network FAQ</title>
        <meta
          property="og:title"
          content="NixLabs Networks | Network FAQ"
          key="title"
        />
        <meta
          property="og:description"
          content="Discover why NixLabs Networks is the right choice with answers to frequently asked questions about our robust network."
          key="description"
        />
      </Head>
      <main className="flex flex-col gap-12 px-4 sm:px-8 lg:px-16 py-8">
        {/* FAQ Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">
            Frequently Asked Questions?
          </h2>
          <div className="border border-neutral-800 p-6 rounded-lg shadow-md">
            {questions.map((item, index) => (
              <div
                key={index}
                className="border-b border-neutral-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full p-4 text-lg font-medium text-left text-zinc-300 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-violet-500"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } transition-transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-zinc-400">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
