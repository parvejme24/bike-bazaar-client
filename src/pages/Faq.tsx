import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What types of bikes does Bike Blazer offer?",
    answer:
      "Bike Blazer offers a variety of bikes, including mountain bikes, road bikes, electric bikes, and more. Check out our collection for the latest models.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes, we provide fast and secure home delivery services across Bangladesh. Delivery times may vary based on location.",
  },
  {
    question: "What is the return policy?",
    answer:
      "We offer a 7-day return policy for unused bikes with all original packaging and accessories. Read our return policy for more details.",
  },
  {
    question: "Can I get installment payment options?",
    answer:
      "Yes, we offer installment payment options for selected models. Contact our support team for more details.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can also track it from your account dashboard.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We provide various financing options tailored to your needs. Check with our support for more details on eligibility and offers.",
  },
  {
    question: "Do you offer test rides?",
    answer:
      "Yes, you can book a test ride for selected models. Please contact us to schedule a time.",
  },
  {
    question: "Are there any warranties?",
    answer:
      "All our bikes come with a standard warranty. Extended warranty options are also available at the time of purchase.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we offer comprehensive maintenance services at our authorized centers.",
  },
  {
    question: "Can I customize my bike?",
    answer:
      "Customizations are available on select models. Please reach out to our team to explore customization options.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split the data into two halves.
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  const renderFaqItem = (faq: (typeof faqData)[0], index: number) => (
    <div
      key={index}
      className="border border-gray-300 rounded-lg transition-transform transform hover:scale-105 duration-300 mb-4"
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-all rounded-t-lg"
      >
        <span className="font-semibold text-gray-800 text-lg">
          {faq.question}
        </span>
        <div className="text-xl text-gray-600">
          {openIndex === index ? (
            <FiMinus className="transition-transform transform rotate-180" />
          ) : (
            <FiPlus className="transition-transform transform rotate-0" />
          )}
        </div>
      </button>

      {openIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="px-4 pb-4 text-gray-600 bg-gray-50 rounded-b-lg"
        >
          {faq.answer}
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto max-w-5xl px-6 mt-16 mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Column */}
        <div>{leftFaqs.map((faq, index) => renderFaqItem(faq, index))}</div>

        {/* Right Column */}
        <div>
          {rightFaqs.map((faq, index) =>
            // Adjust the key and index to be unique across both columns
            renderFaqItem(faq, index + midIndex)
          )}
        </div>
      </div>
    </div>
  );
}
