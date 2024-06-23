import { FaYoutube } from "react-icons/fa";
import { Label, TextInput, Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (data) => {
    try {
      setErrorMessage("");
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const responseData = await response.json();
      if (response.ok) {
        navigate("/");
      } else setErrorMessage(responseData.message);
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className="mt-20">
      <div className="flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center">
        {/* left */}
        <div className="flex items-center flex-1 gap-4 ">
          <FaYoutube className="text-6xl text-red-500" />
          <p className="text-5xl font-bold text-center text-gray-700">
            YouTube
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <h1 className="mb-5 text-4xl font-semibold tracking-wide text-gray-700 ">
            Login
          </h1>
          {/* <div className="w-24 h-1 my-3 bg-red-500"></div> */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4 ">
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                className="pt-1"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                className="pt-1"
                {...register("password", { required: "Password is required" })}
              />
            </div>
            <Button type="submit" outline gradientMonochrome="failure">
              Login
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
