import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    console.log("Logged In User:", data);
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white mx-5 px-10 py-14 rounded-lg border border-gray-200">
        <Title level={2} className="text-center text-gray-800 pb-6">
          Login Now
        </Title>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <Form.Item label="Email" validateStatus={errors.email ? "error" : ""}>
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Enter your email"
              size="large"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            validateStatus={errors.password ? "error" : ""}
          >
            <Input.Password
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              size="large"
            />
            <div className="flex justify-between items-center mt-1">
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
              <p
                onClick={() => navigate("/forgot-password")}
                className="text-blue-500 cursor-pointer text-right ml-auto"
              >
                Forgot Password?
              </p>
            </div>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Login
            </Button>
          </Form.Item>
        </Form>

        {/* Register Redirect */}
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
