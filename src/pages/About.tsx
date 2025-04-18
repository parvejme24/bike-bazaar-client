import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from "keep-react";

const faqData = [
  {
    question: "How can I purchase a bike from Bike Bazaar?",
    answer:
      "You can browse our inventory, select your bike, and complete the purchase directly through our website. We also offer EMI and home delivery.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we provide flexible EMI plans through our financial partners for both new and used bikes.",
  },
  {
    question: "Is it possible to test ride a bike before buying?",
    answer:
      "Yes, we offer test rides at select locations. Please contact our support to schedule a test ride.",
  },
  {
    question: "What documents are required to make a purchase?",
    answer:
      "You will need a valid ID proof, address proof, and in case of financing, income documents as required by our partner banks.",
  },
];

const statsData = [
  {
    value: "10K+",
    label: "Happy Customers",
  },
  {
    value: "500+",
    label: "Bikes in Stock",
  },
  {
    value: "4.9",
    label: "Customer Rating",
  },
  {
    value: "24/7",
    label: "Support",
  },
  {
    value: "1K+",
    label: "Verified Sellers",
  },
  {
    value: "150+",
    label: "Cities Covered",
  },
  {
    value: "300+",
    label: "Bike Models",
  },
  {
    value: "100%",
    label: "Customer Satisfaction",
  },
];

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Bike Bazaar
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Bike Bazaar, we are passionate about two-wheelers. Whether you're
            a speed lover or a daily commuter, we bring you the best bikes with
            unbeatable deals and trusted service.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bike Bazaar"
              className="w-full rounded-xl shadow"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wide selection of new and used bikes</li>
              <li>Trusted by thousands of happy customers</li>
              <li>Affordable pricing and easy financing options</li>
              <li>Fast and secure delivery across the country</li>
              <li>Professional support and expert guidance</li>
              <li>Regular maintenance tips and riding advice</li>
              <li>Exclusive seasonal offers and discounts</li>
              <li>Easy return and exchange policy</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="border p-5 rounded-md bg-slate-100 hover:shadow-md duration-300"
            >
              <h4 className="text-3xl font-bold text-indigo-600">
                {stat.value}
              </h4>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionAction>
                    <AccordionTitle>{faq.question}</AccordionTitle>
                    <AccordionIcon />
                  </AccordionAction>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
