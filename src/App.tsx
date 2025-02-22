import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Payment = lazy(() => import("./pages/Payment"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const MyProfile = lazy(() => import("./pages/dashboard/MyProfile"));
const ManageUsers = lazy(() => import("./pages/dashboard/ManageUsers"));
const ManageProducts = lazy(() => import("./pages/dashboard/ManageProducts"));
const AllOrders = lazy(() => import("./pages/dashboard/AllOrders"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/Faq"));

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          {/* Public Routes with MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
          </Route>

          {/* login and register page  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="all-orders" element={<AllOrders />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
