import { Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/" className="text-primary border px-4 py-2 rounded-lg">Back Home</Link>}
      />
    </div>
  );
}
