import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx";
import Footer from "../components/shared/Footer.tsx";

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
