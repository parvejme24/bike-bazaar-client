import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Banner Image */}
      <div className="w-full h-[350px] overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cycling Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
          About Bike Blazer
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Welcome to Bike Blazer, your ultimate destination for premium bikes in
          Bangladesh. We are driven by a passion for cycling and a commitment to
          delivering excellence in every ride. Whether you’re exploring rugged
          mountain trails, cruising on scenic roads, or embracing the future
          with electric bikes, Bike Blazer is here to empower your journey.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Founded by a team of cycling enthusiasts, Bike Blazer was born out of
          the belief that quality bikes can transform everyday journeys into
          extraordinary adventures. Our extensive collection features bikes that
          combine performance, style, and cutting-edge technology, ensuring that
          every ride is a unique experience. We continuously strive to bring you
          the latest models and innovations in the biking world.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          At Bike Blazer, we value community and customer satisfaction above
          all. Our knowledgeable team is dedicated to providing personalized
          support, whether you’re a seasoned rider or just beginning your
          cycling adventure. We are committed to maintaining the highest
          standards of quality and service, ensuring that your experience with
          us is nothing short of exceptional.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          As we continue to grow, our mission remains steadfast: to inspire and
          enable a lifestyle that celebrates freedom, adventure, and
          sustainability. We invite you to join our community of passionate
          cyclists and embark on a journey that goes beyond riding – a journey
          that redefines the way you experience life on two wheels.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Thank you for choosing Bike Blazer. Let’s ride together into a future
          where every journey is an adventure waiting to happen.
        </p>
      </div>

      {/* Special Quotation */}
      <div className="border border-gray-200 rounded-lg p-10 mt-12 bg-gray-50 flex items-center">
        <FaQuoteLeft className="text-5xl text-gray-300 mr-4" />
        <p className="text-2xl text-gray-600 leading-relaxed italic">
          "Life is like riding a bicycle. To keep your balance, you must keep
          moving."
        </p>
      </div>
    </div>
  );
}
