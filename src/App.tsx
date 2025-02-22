import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
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
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

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
