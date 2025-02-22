import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Registered User:", data);
    navigate("/login"); // Redirect to Login Page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white mx-5 px-10 py-14 rounded-lg border border-gray-200">
        <Title level={2} className="text-center text-gray-800 pb-8">
          Register Now
        </Title>

        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <Form.Item label="Full Name">
            <Input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Enter your full name"
              size="large"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </Form.Item>

          {/* Email Field */}
          <Form.Item label="Email">
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
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </Form.Item>

          {/* Password Field */}
          <Form.Item label="Password">
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
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Register
            </Button>
          </Form.Item>

          {/* Login Redirect */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>
        </Form>
      </div>
    </div>
  );
}
