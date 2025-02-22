import Info from "../components/Contact/Info/Info";
import Map from "../components/Contact/Map/Map";

export default function Contact() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-6 mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Left Side - Contact Info */}
          <Info />

          {/* Right Side - Map */}
          <Map />
        </div>
      </div>
    </div>
  );
}
