import { FaYoutube } from "react-icons/fa";
import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Register = () => {
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
            Sign Up
          </h1>
          {/* <div className="w-24 h-1 my-3 bg-red-500"></div> */}
          <form className="flex flex-col gap-4 ">
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                className="pt-1"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                className="pt-1"
              />
            </div>
            <Button outline gradientMonochrome="failure">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Already have an account?</span>
            <Link to="/login" className="text-blue-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
