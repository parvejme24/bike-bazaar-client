import { useState } from "react";
import { Button, Input, Label } from "keep-react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registered Data:", formData);
    // You can send data to backend here
  };

  return (
    <div className="bg-[#F8F9FA]">
      <div className="container mx-auto max-w-7xl flex justify-center items-center min-h-screen px-4">
        <div className="w-[500px] max-w-[500px] mx-auto p-10 border rounded-xl bg-white shadow">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Login Now
          </h2>
          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            {/* Email */}
            <fieldset className="max-w-md space-y-1">
              <Label htmlFor="email">Enter Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>

            {/* Password */}
            <fieldset className="max-w-md space-y-1 relative">
              <Label htmlFor="password">Enter Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 text-2xl text-blue-600 hover:underline cursor-pointer mt-1 block"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </fieldset>

            {/* Submit Button */}
            <Button color="primary" className="w-full">
              Login
            </Button>

            {/* Link to Login */}
            <p className="text-center">
              <small>
                New to this website?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline duration-300"
                >
                  Register
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
