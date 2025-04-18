import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const role = "admin"
  const token = true;

  return token && role === "admin" ? children : <Navigate to="/login" />;
};

export default AdminRoute;
