import Layout from "../components/layouts/Layout";
import Register from "../assets/authentication-image/Registration.png";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <Layout>
      <div className=" dark:text-slate-100 relative text-black h-full w-full overflow-y-auto p-3 flex sm:flex-row flex-col">
        <div className="left sm:w-1/2 w-full h-screen hidden sm:flex items-center justify-end">
          <img src={Register} className="object-cover" alt="Login" />
        </div>

        <div className="right sm:w-1/2 w-full h-screen items-center flex justify-center">
          <form className="authentication backdrop-brightness-50 flex p-3 flex-col glassmorphism sm:w-full w-4/5 sm:mx-7 mx-0">
            <h1 className="font-medium text-center text-2xl my-4">
              Sign Up with your email
            </h1>
            <div className="flexflex-col">
              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="glassmorphism-input"
                />
              </div>

              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="glassmorphism-input"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=".........."
                  className="glassmorphism-input"
                />
              </div>

              <div className="flex flex-col my-3">
                <label className="my-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=".........."
                  className="glassmorphism-input"
                />
              </div>
            </div>

            <div className=" p-3 flex items-center gap-2 sm:flex-row flex-col justify-between">
              <button className="bg-gfg-green my-3 text-base sm:text-lg  text-white rounded-md px-5 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2">
                Register Me
              </button>
              <Link to="/login" className="text-sm mx-4">
                Already a user?{" "}
                <span className="font-heading underline text-sm mx-1 font-semibold text-blue-500">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
