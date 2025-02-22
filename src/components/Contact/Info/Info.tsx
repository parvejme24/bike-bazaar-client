import { FiMail, FiMapPin, FiPhoneCall, FiWatch } from "react-icons/fi";

export default function Info() {
  return (
    <div className="bg-no-repeat bg-center bg-cover">
      {/* Header Section */}
      <div className="bg-emerald-500 p-6 flex justify-center items-center">
        <h2 className="text-white text-lg font-semibold">Get in Touch</h2>
      </div>

      {/* Contact Details */}
      <div className="p-10">
        {/* Location */}
        <div className="text-emerald-600 border-b border-emerald-600 pb-6">
          <h3 className="font-bold text-lg mb-4">Location</h3>
          <p className="flex items-center">
            <FiMapPin className="text-xl mr-2" />
            <span>Khaerhat Road, Daulatkhan, Bhola, Bangladesh</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-emerald-600 border-b border-emerald-600 py-6">
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="flex items-center mb-2">
            <FiPhoneCall className="text-xl mr-2" />
            <span>+880 1314-001928</span>
          </p>
          <p className="flex items-center">
            <FiMail className="text-xl mr-2" />
            <span>support@bikeblazer.com</span>
          </p>
        </div>

        {/* Opening Hours */}
        <div className="text-emerald-600 pt-6">
          <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
          <div className="flex items-center relative">
            <FiWatch className="text-xl absolute top-0 left-0" />
            <p className="ml-8">
              <span className="block">Saturday - Wednesday: 9:00 AM - 4:00 PM</span>
              <span className="block">Thursday: 9:00 AM - 1:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
