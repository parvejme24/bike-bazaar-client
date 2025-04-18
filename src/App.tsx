import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import DashboardLayout from "./layouts/DashboardLayout";

// Loader Component
const Loader = () => (
  <div className="min-h-screen flex justify-center items-center">
    <Spinner />
  </div>
);

// Public Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Private - User Dashboard Pages
const Checkout = lazy(() => import("./pages/private/user/Checkout.tsx"));
const UserDashboard = lazy(
  () => import("./pages/private/user/UserDashboard.tsx")
);
const MyOrders = lazy(() => import("./pages/private/user/MyOrders.tsx"));
const ProfileSettings = lazy(
  () => import("./pages/private/user/ProfileSettings.tsx")
);
const ChangePassword = lazy(
  () => import("./pages/private/user/ChangePassword.tsx")
);
const TrackOrder = lazy(() => import("./pages/private/user/TrackOrder.tsx"));

// Private - Admin Dashboard Pages
const AdminDashboard = lazy(
  () => import("./pages/private/admin/AdminDashboard.tsx")
);
const ManageUsers = lazy(() => import("./pages/private/admin/ManageUsers.tsx"));
const ManageProducts = lazy(
  () => import("./pages/private/admin/ManageProducts.tsx")
);
const CreateProduct = lazy(
  () => import("./pages/private/admin/CreateProduct.tsx")
);
const EditProduct = lazy(() => import("./pages/private/admin/EditProduct.tsx"));
const ManageOrders = lazy(
  () => import("./pages/private/admin/ManageOrders.tsx")
);
const UpdateOrderStatus = lazy(
  () => import("./pages/private/admin/UpdateOrderStatus.tsx")
);

// Route Guards (basic example)
import PrivateRoute from "./routes/PrivateRoute.tsx";
import AdminRoute from "./routes/AdminRoute.tsx";
import { Spinner } from "keep-react";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Private Routes - User */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/user/orders" element={<MyOrders />} />
          <Route path="/dashboard/user/profile" element={<ProfileSettings />} />
          <Route path="/dashboard/user/password" element={<ChangePassword />} />
          <Route
            path="/dashboard/user/track/:orderId"
            element={<TrackOrder />}
          />
        </Route>

        {/* Checkout (not in dashboard layout but still private) */}
        <Route
          path="/checkout/:id"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* Private Routes - Admin */}
        <Route
          element={
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          }
        >
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/users" element={<ManageUsers />} />
          <Route
            path="/dashboard/admin/products"
            element={<ManageProducts />}
          />
          <Route
            path="/dashboard/admin/products/create"
            element={<CreateProduct />}
          />
          <Route
            path="/dashboard/admin/products/edit/:id"
            element={<EditProduct />}
          />
          <Route path="/dashboard/admin/orders" element={<ManageOrders />} />
          <Route
            path="/dashboard/admin/orders/update/:id"
            element={<UpdateOrderStatus />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
